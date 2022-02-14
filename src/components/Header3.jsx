import React from 'react';
import { Alert, Button, Image } from 'react-bootstrap';
import myimg from "../assest/bg1.png";

const Header3 = () => {



    return (
        <>
        <div className="myheader3">
            <img src={myimg} className="myheader3img" />

            <div className="my3title3"></div>

        </div>


        </>
    );
}

export default Header3;