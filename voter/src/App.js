import React from 'react';
import logo from './logo.svg';
import triangle from './static/img/triangle.png'
import rect from './static/img/rect.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/main.css'
import './App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import WaveformCard from './components/WaveformCard.js';

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="auto">
          <Button className="opinion-btn disagree drop p-5"></Button>
        </Col>
        <Col xs="auto">
          <WaveformCard/>
          <Row className=" justify-content-md-center">
            <span className="controls-bar mt-3"></span>
            <Col xs={2} className="mt-4 skip-backward">
              <button>
                <img className="control-rect mr-1" src={rect}/>
                <img className="control-triangle" src={triangle}/>
              </button>
            </Col>
            <Col xs={6}>
              <center>
                <div className="circle p-3">
                  <img className="play-triangle ml-2 mt-2" src={triangle}/>
                </div>
              </center>
            </Col>
            <Col xs={2}>
              <div className="mt-4 skip-forward"> 
                <img className="control-rect mr-1" src={rect}/>
                <img className="control-triangle" src={triangle}/>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs="auto">
          <Button className="opinion-btn agree drop p-5"></Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
