import React, {useState} from "react";
import './App.css';
import { FiArrowDown, FiArrowRightCircle } from 'react-icons/fi';
import {Modal, Button} from "react-bootstrap";

function App() {

    let [refri, refri변경] = useState(false); // useState의 기본값을 false로 지정
    let [camera, camera변경] = useState(false); // useState의 기본값을 false로 지정

    return (
     <div className="App">
         <div className="blank-nav">
             <button className="box" onClick={ ()=>{ camera변경(!camera)} }>카메라 </button>
             <button className="box" onClick={ ()=>{ refri변경(!refri)} }>음식 추천</button>
         </div>
         <div>
             {
             refri === true
                 ? <Refri></Refri>
                 : null
             }
             {
                 camera === true
                     ? <Camera></Camera>
                     : null
             }

         </div>
     </div>
    );
}

function Camera() {
    const [playing, setPlaying] = useState(false);

    const HEIGHT = 600;
    const WIDTH = 1000;

    const startVideo = () => {
        setPlaying(true);
        navigator.getUserMedia(
            {
                video: true,
            },
            (stream) => {
                let video = document.getElementsByClassName('app__videoFeed')[0];
                if (video) {
                    video.srcObject = stream;
                }
            },
            (err) => console.error(err)
        );
    };

    const stopVideo = () => {
        setPlaying(false);
        let video = document.getElementsByClassName('app__videoFeed')[0];
        video.srcObject.getTracks()[0].stop();
    };

    return (
        <div className="apple">
            <div className="app__container">
                <video
                    height={HEIGHT}
                    width={WIDTH}
                    muted
                    autoPlay
                    className="app__videoFeed"
                ></video>
            </div>
            <div className="app__input">
                {playing ? (
                    <button onClick={stopVideo}>Stop</button>
                ) : (
                    <button onClick={startVideo}>Start</button>
                )}
            </div>
        </div>
    );
}

function Refri() {

    let [pop, pop변경] = useState(false);
    let [modal, modal변경] = useState(false);

    return (

        <div className="refri">
            <div className="container1">
                <RefriModal show={modal} onHide={()=>{modal변경(false)}} />
                <div className="item" onClick={()=>{modal변경(true)}}>
                    <ul>
                        <li>A-1</li>
                        <li>A-2</li>
                        <li>A-3</li>
                        <li>A-4</li>
                    </ul>
                </div>
                <div className="item" onClick={()=>{modal변경(true)}}>
                    <ul>
                        <li>B-1</li>
                        <li>B-2</li>
                        <li>B-3</li>
                        <li>B-4</li>
                    </ul>
                </div>
                <div className="item" onClick={()=>{modal변경(true)}}>
                    <ul>
                        <li>C-1</li>
                        <li>C-2</li>
                        <li>C-3</li>
                        <li>C-4</li>
                    </ul>
                </div>
                <div className="item" onClick={()=>{modal변경(true)}}>
                    <ul>
                        <li>D-1</li>
                        <li>D-2</li>
                        <li>D-3</li>
                        <li>D-4</li>
                    </ul>
                </div>
                <div className="item" onClick={()=>{modal변경(true)}}>
                    <ul>
                        <li>E-1</li>
                        <li>E-2</li>
                        <li>E-3</li>
                        <li>E-4</li>
                    </ul>
                </div>
                <div className="item" onClick={()=>{modal변경(true)}}>
                    <ul>
                        <li>F-1</li>
                        <li>F-2</li>
                        <li>F-3</li>
                        <li>F-4</li>
                    </ul>
                </div>
            </div>
            <div className="icon1">
                <FiArrowRightCircle />
            </div>
            <div className="right">
                <div className="container2">
                    <ul>
                        <li>A-1</li>
                        <li>B-2</li>
                        <li>C-3</li>
                        <li>D-4</li>
                        <li>E-5</li>
                    </ul>
                </div>
                <FiArrowDown className="icon2" />
                <div className="container3">
                    <div>
                        {
                            pop === true
                                ? <Pop></Pop>
                                : null
                        }
                    </div>
                </div>
                <div className="under">
                    <button className="ready" onClick={ ()=>{pop변경(!pop)} }> 선택완료</button>
                </div>
            </div>
        </div>
    )
}

function Pop() {
    return(
        <div>
            <div className="Popapp">
                <ul>
                    <li>a 링크</li>
                    <li>b 링크</li>
                    <li>c 링크</li>
                    <li>d 링크</li>
                </ul>
            </div>
        </div>

    )
}

function RefriModal({show, onHide}) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    A구역
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>재료</h4>
                <p>
                    <ul>
                        <li>A-1</li>
                        <li>A-2</li>
                        <li>A-3</li>
                        <li>A-4</li>
                    </ul>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}







export default App;
