import React from 'react';
import { Alert, Image } from 'react-bootstrap';
import footer1 from "../assest/footer1.png";
import footer2 from "../assest/footer2.png";

const Footer = () => {
    return ( 
        <div className="footer1">
            <Alert variant="info">footer</Alert>
            <Image src={footer1} className="myfooterimg"></Image>
            <Image src={footer2} className="myfooterimg"></Image>
            <Image src={footer1} className="myfooterimg"></Image>
        </div>
     );
}
 
export default Footer;