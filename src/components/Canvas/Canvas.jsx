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
			this.canvas.width = this.props.video.video.videoWidth;
			this.canvas.height = this.props.video.video.videoHeight;

			const imgWidth = 100;
			const imgHeight = 100;

			const posX = this.canvas.width / 2 - imgWidth / 2;
			const posY = this.canvas.height / 2 - imgHeight / 2;

			(function loop() {

				ctx.drawImage(self.props.video.video, 0, 0);
				ctx.drawImage(self.image, posX, posY, imgWidth, imgHeight);
				setTimeout(loop, 1000 / 30);
			})();
		}, 0);
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
