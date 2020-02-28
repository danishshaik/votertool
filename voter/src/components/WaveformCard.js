import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img from '../static/img/waveform.png';

function WaveformCard(props) {
	return (
		<center className="pt-5 pb-5">
			<div className="pt-5 pb-5 sound-card drop">
				<img class="waveform pt-5 pb-5 pr-1 pl-1" src={img}/>
			</div>
		</center>
	);
}

export default WaveformCard