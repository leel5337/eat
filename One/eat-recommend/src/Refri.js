import React, {useState} from "react";
import {FiArrowDown, FiArrowRightCircle} from "react-icons/fi";
import {Link, Route} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";

function Refri() {

    let [modal, modal변경] = useState(false);

    return(
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

                {/* 선택완료를 누를 시 추천리스트가 나올수 있는 창 구현 */}

                <div className="under">
                    <Link to="Recipe">
                        <button className="ready">선택완료</button>
                    </Link>
                </div>
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



export default Refri;
