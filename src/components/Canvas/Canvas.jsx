import React from 'react';
import img from '../../assets/ring.png';
import './styles.scss';

class Canvas extends React.Component {
	canvas = null;
	image = null;

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (!this.props.video) return;

		const ctx = this.canvas.getContext('2d');

		this.props.video.video.addEventListener('play', () => {
			const self = this;
			const videoWidth = this.props.video.video.videoWidth;
			const videoHeight = this.props.video.video.videoHeight;

			this.canvas.width = videoWidth;
			this.canvas.height = videoHeight;

			const imgWidth = 100;
			const imgHeight = 100;

			const posX = this.canvas.width / 2 - imgWidth / 2;
			const posY = this.canvas.height / 2 - imgHeight / 2;

			const sourceX = 5;
			const sourceY = 5;
			const sourceWidth = videoWidth - sourceX;
			const sourceHeight = videoHeight;
			const destX = 5;
			const destY = 5;
			const destWidth = this.canvas.width - 10;
			const destHeight = this.canvas.height - 5;

			const loop = () => {
				ctx.drawImage(self.props.video.video, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
				ctx.drawImage(self.image, posX, posY, imgWidth, imgHeight);
				requestAnimationFrame(loop);
			};

			loop();
		});
	}

	render() {
		return (
			<>
				<canvas id="canvas" ref={ref => this.canvas = ref}> Your browser doesn't support canvas. </canvas>
				<img ref={ref => this.image = ref} src={img} alt="" style={{ display: 'none' }} />
			</>
		)
	}
};

export default Canvas;
