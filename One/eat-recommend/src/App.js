import React from "react";
import './App.css';

import { Navbar, Container, Nav} from 'react-bootstrap';

import { Route, Link} from "react-router-dom";
import Camera from "./Camera.js";
import Refri from "./Refri.js";
import Recipe from "./Recipe.js";

import axios from "axios";
import { FiArrowDown, FiArrowRightCircle } from 'react-icons/fi';


// import Foodjson from '../public/fod.json';
// console.log(Foodjson);
// document.write(JSON.stringify(Foodjson));




function App() {


    return (
     <div className="App">
         <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">이현이민 어플리케이션</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Nav.Link 안에 link태그를 작성하게 되면 콘소창에 warning이 뜨게됨으로 Link태그를 삭제해주고 as={Link}를 작성해주어 link태그를 집어넣은 것처처럼 해준다 */}
                        <Link to="/Camera">
                            <button className="box">카메라</button>
                        </Link>
                        <Link to="/Refri">
                            <button className="box">음식 추천</button>
                        </Link>
                     </Nav>
                </Navbar.Collapse>
             </Container>
        </Navbar>
         <Route path="/Camera">
             <Camera/>
         </Route>
         <Route path="/Refri">
             <Refri/>
         </Route>
         <Route path="/Recipe">
             <Recipe/>
         </Route>
     </div>
    );
}







export default App;
