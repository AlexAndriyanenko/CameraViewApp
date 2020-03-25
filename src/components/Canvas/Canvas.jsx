import React from 'react';
import img from '../../assets/ring.png';
import './styles.scss';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Canvas extends React.Component {
	canvas = null;
	image = null;
	downloadBtn = null;

	constructor(props) {
		super(props);
		this.handleCaptureImage = this.handleCaptureImage.bind(this);

		this.state = {
			base64: '',
		};
	};

	takeCanvasSnapshot = () => {
		const ctx = this.canvas.getContext('2d');

		const videoWidth = this.props.video.video.videoWidth;
		const videoHeight = this.props.video.video.videoHeight;

		window.video = this.props.video.video;
		window.ctx = ctx;

		this.canvas.width = videoWidth;
		this.canvas.height = videoHeight;

		const imgWidth = 100;
		const imgHeight = 100;

		const posX = this.canvas.width / 2 - imgWidth / 2;
		const posY = this.canvas.height / 2 - imgHeight / 2;

		// first of all clear canvas
		ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		ctx.drawImage(this.props.video.video, 0, 0, this.canvas.width, this.canvas.height)
		ctx.drawImage(this.image, posX, posY, imgWidth, imgHeight);
	};

	handleCaptureImage = () => {
		if (!this.props.video) return;

		this.takeCanvasSnapshot();

		this.setState(state => ({
			...state,
			base64: this.canvas.toDataURL(),
		}));

		// setTimeout(() => {
		// 	this.downloadBtn.click();
		// }, 0);
	};


	render() {
		return (
			<Container>
				<Row className="d-flex justify-content-center mb-3">
					<canvas id="canvas" ref={ref => this.canvas = ref}> Your browser doesn't support canvas. </canvas>
				</Row>
				<img ref={ref => this.image = ref} src={img} alt="" style={{ display: 'none' }} />

				<Row className="d-flex justify-content-center mb-2">
					<Button className="mr-2" onClick={this.handleCaptureImage}>
						Capture
					</Button>
					<Button className="btn btn-success">
						<a className="text-white" ref={ref => this.downloadBtn = ref} href={this.state.base64} download> Download </a>
					</Button>
				</Row>
			</Container>
		)
	};
}

export default Canvas;
