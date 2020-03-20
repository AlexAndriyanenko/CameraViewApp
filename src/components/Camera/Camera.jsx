import React, {useEffect, useState} from 'react';
import { CAMERA_CONSTRAINTS } from "../../utils/constants";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons/faExchangeAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import './styles.scss';

const Camera = ({ isMobile }) => {
	const [stopped, setStopped] = useState(false);
	const [front, setFront] = useState(false);
	useEffect(() => {
		const constraints = CAMERA_CONSTRAINTS;

		if (isMobile) {
			constraints.video.facingMode = front ? 'user' : { exact: 'environment' };
		}

		window.navigator.mediaDevices.getUserMedia(constraints)
			.then((stream) => {
				const video = document.getElementById('video');
				video.srcObject = stream;
				video.onloadedmetadata = () => {
					if (stopped) {
						video.pause();
						return;
					}

					video.play();
				};
			})
			.catch((e) => {
				toast.error(`
				An ${e.name} error has occurred: 
				source: ${e.constraint}
				`, { position: toast.POSITION.TOP_RIGHT });
			})
	}, [stopped, front, isMobile]);

	const handleButtonClick = () => {
		setStopped(s => !s);
	};

	const handleCameraChange = () => {
		setFront(f => !f);
	};

	return (
		<Container className="camera-container" fluid="md">
			<Row className="justify-content-md-center mb-5">
				<Col className="d-flex justify-content-center">
					<video id="video">
						Your browser doesn't support this feature.
					</video>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col className="d-flex justify-content-center">
					<div className={`${isMobile ? 'mr-5' : ''}`} onClick={handleButtonClick}>
						{stopped ? (
							<Button variant="primary">
								Play
							</Button>
						) : (
							<Button variant="danger">
								Pause
							</Button>
						)}
					</div>

					{isMobile && (
						<div onClick={handleCameraChange}>
							<Button varian="light">
								<FontAwesomeIcon icon={faExchangeAlt} />
							</Button>
						</div>
					)}
				</Col>
			</Row>

			<ImageOverlay />
		</Container>
	)
};

export default Camera;
