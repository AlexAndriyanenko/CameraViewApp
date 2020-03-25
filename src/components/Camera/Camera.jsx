import React, { createRef } from 'react';
import Webcam from 'react-webcam';
import {CAMERA_CONSTRAINTS} from "../../utils/constants";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import {faExchangeAlt} from "@fortawesome/free-solid-svg-icons/faExchangeAlt";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './styles.scss';
import img from "../../assets/ring.png";

class Camera extends React.Component  {
	constructor(props) {
		super(props);

		this.webcamRef = createRef();
		this.canvasRef = createRef();
		this.imageRef = createRef();

		this.handleCameraChange = this.handleCameraChange.bind(this);
		this.handleCaptureImage = this.handleCaptureImage.bind(this);

		this.state = {
			base64: '',
			front: false,
			isPaused: false,
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.state.isPaused) {
			this.webcamRef.current.video.pause();
		} else {
			this.webcamRef.current.video.play();
		}
	};


	handleCameraChange = () => {
		this.setState((s) => ({
			front: !s.front,
		}));
	};

	getConstraints = () => {
		let constraints = CAMERA_CONSTRAINTS;
		if (this.props.isMobile) {
			constraints = {
				...constraints,
				video: {
					...constraints.video,
					facingMode: this.state.front ? 'user' : {exact: 'environment'},
				},
				facingMode: this.state.front ? 'user' : {exact: 'environment'},
			};
		} else {
			constraints = {
				...constraints,
				video: {
					...constraints.video,
					facingMode: 'user',
				},
				facingMode: 'user',
			}
		}

		return constraints;
	};

	takeCanvasSnapshot = () => {
		const ctx = this.canvasRef.getContext('2d');

		const videoWidth = this.webcamRef.current.video.videoWidth;
		const videoHeight = this.webcamRef.current.video.videoHeight;

		this.canvasRef.width = videoWidth;
		this.canvasRef.height = videoHeight;

		const imgWidth = 140;
		const imgHeight = 140;

		const posX = this.canvasRef.width / 2 - imgWidth / 2;
		const posY = this.canvasRef.height / 2 - imgHeight / 2;

		// first of all clear canvas
		ctx.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height);

		ctx.drawImage(this.webcamRef.current.video, 0, 0, this.canvasRef.width, this.canvasRef.height);
		ctx.drawImage(this.imageRef, posX, posY, imgWidth, imgHeight);
	};

	handleCaptureImage = () => {
		const self = this;

		// if video is currently playing, stop it and make screenshot,
		// otherwise start playing video
		if (!this.state.isPaused) {
			this.takeCanvasSnapshot();
			this.setState((s) => ({
				base64: self.canvasRef.toDataURL(),
			}));
		}

		this.setState((s) => ({
			isPaused: !s.isPaused,
		}))
	};

	render() {
		return (
			<Container className="camera-container" fluid="md">
				<Row className="justify-content-md-center mb-2">
					<Col className="d-flex justify-content-center image-overlay-container">
						<Webcam
							ref={this.webcamRef}
							className="video-container"
							audio={false}
							videoConstraints={this.getConstraints()}
						/>
						<ImageOverlay/>
					</Col>
				</Row>
				<Row className="justify-content-md-center mb-2">
					<Col className="d-flex justify-content-center">
						<Container>
							<Row className="d-flex justify-content-center mb-2">
								<canvas id="canvas" ref={ref => this.canvasRef = ref}> Your browser doesn't support canvas.</canvas>
							</Row>
							<img ref={ref => this.imageRef = ref} src={img} alt="" style={{display: 'none'}}/>

							<Row className="d-flex justify-content-center mb-2">
								<Button onClick={this.handleCaptureImage}>
									Capture
								</Button>
								{this.state.base64 && (
									<Button className="btn btn-success ml-2">
										<a className="text-white" href={this.state.base64}
										   download> Download </a>
									</Button>
								)}
							</Row>
						</Container>
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					<Col className="d-flex justify-content-center">
						{this.props.isMobile && (
							<Button onClick={this.handleCameraChange} varian="light">
								<FontAwesomeIcon icon={faExchangeAlt}/>
							</Button>
						)}
					</Col>
				</Row>
			</Container>
		)
	}
};

export default Camera;
