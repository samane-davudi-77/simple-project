import React from 'react';
import { Card , Button} from 'react-bootstrap';
import mypost1 from "../assest/post1.png"
import mypost2 from "../assest/post1.png";


const MyFirstP = () => {
    return (
        <div className="myp rtl">
            <img src={mypost1} fluid />
            <div className="mt-3">
            <h2 className="p-3">این نام پست ما است!</h2>
            <h3 className="p-3"> این متن پست ما است! این متن پست ما است!</h3>
            </div>
            <Button variant="info" className="mycbutton">ادامه..</Button>
            
        </div>

    );
}

export default MyFirstP;