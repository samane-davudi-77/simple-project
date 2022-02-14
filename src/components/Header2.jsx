import React from 'react';
import { Alert, Button, Card, Image } from 'react-bootstrap';
import catimg from "../assest/95684.jpg";
import mypost2 from "../assest/sale.png";
import mypost1 from "../assest/sale2.png";


const Header2 = () => {

    const myimg1 = catimg;


    return (
        <div className="mysecondheader">
            <div className="mynav2">
                <div className="mt-5">
                <h1>this is the title </h1>
                <h1>this is the title </h1>
                </div>
                <img src={mypost1} className="myboximg2" />
                <img src={mypost2} className="myboximg3" />
            </div>
           
        
        </div>
    );
}

export default Header2;