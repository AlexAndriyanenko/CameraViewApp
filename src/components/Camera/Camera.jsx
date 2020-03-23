import React, {useState, useRef} from 'react';
import Webcam from 'react-webcam';
import {CAMERA_CONSTRAINTS} from "../../utils/constants";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {faExchangeAlt} from "@fortawesome/free-solid-svg-icons/faExchangeAlt";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Canvas from "../Canvas/Canvas";
import './styles.scss';

const Camera = ({isMobile}) => {
	const [streamCanvas, setStreamCanvas] = useState(false);
	const [front, setFront] = useState(false);
	const [base64, setBase64] = useState('');
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);
	const downLoadRef = useRef(null);

	const handleCameraChange = () => {
		setFront(f => !f);
	};

	const getConstraints = () => {
		let constraints = CAMERA_CONSTRAINTS;
		if (isMobile) {
			constraints = {
				...constraints,
				video: {
					...constraints.video,
					facingMode: front ? 'user' : {exact: 'environment'},
				},
				facingMode: front ? 'user' : {exact: 'environment'},
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

	const handleUserMediaStart = () => {
		const s = webcamRef.current.stream;
		setStreamCanvas(true);
	};

	const handleCaptureImage = () => {
		const canvas = document.getElementById('canvas');
		setBase64(canvas.toDataURL());
		setTimeout(() => {
			downLoadRef.current.click();
		},0);
	};

	return (
		<Container className="camera-container" fluid="md">
			<Row className="justify-content-md-center mb-5">
				<Col className="d-flex justify-content-center">
					<Webcam
						style={{ display: 'none' }}
						ref={webcamRef}
						className="video-container"
						audio={false}
						videoConstraints={getConstraints()}
						onUserMedia={handleUserMediaStart}
					/>
					<Canvas ref={canvasRef} {...(streamCanvas && ({video: webcamRef.current}))} />
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col className="d-flex justify-content-center">
						<Button onClick={handleCaptureImage}>
							 Capture
						</Button>
				</Col>
				<Col className="d-flex justify-content-center">
					{isMobile && (
							<Button onClick={handleCameraChange} varian="light">
								<FontAwesomeIcon icon={faExchangeAlt}/>
							</Button>
					)}
				</Col>
			</Row>

			<a ref={downLoadRef} href={base64} download style={{display: 'none'}} />
		</Container>
	)
};

export default Camera;
