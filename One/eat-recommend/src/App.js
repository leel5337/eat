import React, {useEffect, useState} from "react";
import './App.css';
import { FiArrowDown, FiArrowRightCircle } from 'react-icons/fi';
import {Modal, Button} from "react-bootstrap";
import { Navbar, Container, Nav} from 'react-bootstrap';
import axios from "axios";
import Recipe from "./Recipe.js";
import {Link, Route} from "react-router-dom";


// import Foodjson from '../public/fod.json';
// console.log(Foodjson);
// document.write(JSON.stringify(Foodjson));




function App() {

    let [refri, refri변경] = useState(false); // useState의 기본값을 false로 지정
    let [camera, camera변경] = useState(false); // useState의 기본값을 false로 지정

    return (
     <div className="App">
         <Navbar bg="light" expand="lg">
             <Container>
                 <Navbar.Brand href="#home">                이현이민 어플리케이션</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="me-auto">
                         {/* Nav.Link 안에 link태그를 작성하게 되면 콘소창에 warning이 뜨게됨으로 Link태그를 삭제해주고 as={Link}를 작성해주어 link태그를 집어넣은 것처처럼 해준다 */}
                         <button className="box" onClick={ ()=>{ camera변경(!camera)} }>카메라 </button>
                         <button className="box" onClick={ ()=>{ refri변경(!refri)} }>음식 추천</button>
                     </Nav>
                 </Navbar.Collapse>
             </Container>
         </Navbar>

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

    let [food, food변경] = useState(null);

    useEffect(()=> {
        axios.get('https://codingapple1.github.io/shop/data2.json')
            .then(res => {
               return res.json();
            })
            .then(data => {
                food변경(data);
            })
    }, []);


    // axios.get('/Users/ijeonghyeon/github/eat/One/eat-recommend/src/foood.json')
    //     .then((result)=>{
    //         console.log(result.data) // 위 get요청으로 가져온 데이터 출력
    //         food변경([...food, ...result.data] );
    //     })

    return (

        <div className="refri">
            <div className="container1">
                <RefriModal show={modal} onHide={()=>{modal변경(false)}} />
                <div className="item" onClick={()=>{modal변경(true)}}>
                    {/*{*/}
                    {/*    Foodjson.map((a,i)=>{ // a는 map이라는 반복문이 돌때마다 들어가는 shoes 데이터, i는 반복문이 돌때마다 들어가는 번호*/}
                    {/*        return <Food food={food[i]} i={i} />*/}
                    {/*    })*/}
                    {/*}*/}

                    {/*{food && <Food food={food} title="All Food" />}*/}
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

                {/* 선택완료를 누를 시 추천리스트가 나올수 있는 창 구현 */}

               <div className="under">
                    <button className="ready">
                        <Link exact to="/Recipe">선택완료</Link>
                    </button>
                   <Route path="/Recipe">
                       <Recipe></Recipe>
                   </Route>
               </div>
            </div>
            <Route path="/Recipe">
                <Recipe></Recipe>
            </Route>

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
                        <li>
                            <label><input type="checkbox" /> A-1 </label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> A-2 </label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> A-3 </label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> A-4 </label>
                        </li>
                    </ul>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Food({ food, title }) { // props안에 shoes가 들어가게된다
    return(
        <div>
            <h2>{title}</h2>
            {food.map(foods => (
                <h2>{foods.title}</h2>
            ))}
        </div>
    )
}





export default App;
