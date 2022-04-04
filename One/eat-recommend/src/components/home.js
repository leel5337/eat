import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Camera from "./Camera";

const MainBlock = styled.div` 
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1118px;
    height: 820px;
  }
  .item1 {
    height: 70px;
    margin: 40px 100px;
    padding: 15px 32px;
    background-color: rgb(145, 143, 143);
    color: white;
    font-size: 16px;
    border-radius: 20px;
    &:hover {
        background: #343a40;
    }
  }
`;

function home( history ) {

    return (
        <div>
            <MainBlock>
                <div className="container">
                    <Router>
                            <Link to='/Camera'>
                                <button className="item1">카메라</button>
                            </Link>
                    </Router>
                            <button className="item1" onClick={ () => {history.push("/Repository")}}>추 천</button>
                </div>
            </MainBlock>
        </div>
    )
}
export default home;