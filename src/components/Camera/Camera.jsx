import React, {useState} from 'react';
import Webcam from 'react-webcam';
import { CAMERA_CONSTRAINTS } from "../../utils/constants";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons/faExchangeAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.scss';

const Camera = ({ isMobile }) => {
	const [front, setFront] = useState(false);

	const handleCameraChange = () => {
		setFront(f => !f);
	};

	const getConstraints = () => {
		let constraints = CAMERA_CONSTRAINTS;
		if (isMobile) {
			constraints = {
				...constraints,
				video: {
					...CAMERA_CONSTRAINTS.video,
					facingMode: front ? 'user' : { exact: 'environment' }
				}
			};

		}   else {
			constraints = {
				...constraints,
				video: {
					...CAMERA_CONSTRAINTS.video,
					facingMode: 'user',
				}
			};
		}

		return constraints;
	};

	return (
		<Container className="camera-container" fluid="md">
			<Row className="justify-content-md-center mb-5">
				<Col className="d-flex justify-content-center">
					<Webcam
						audio={false}
						videoConstraints={getConstraints()}
					/>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col className="d-flex justify-content-center">
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
