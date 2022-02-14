import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import note2 from "../assest/note2.jpg"
import { login } from '../features/userslice';
import Footer from './Footer';

const Login = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const reset =()=> (
        setName(""),
        setEmail(""),
        setPassword("")
    );

    const submithandler = (e) => {
        e.preventDefault();

        dispatch(login({
            name: name,
            email: email,
            password : password,
            LoggedIn: true

        }));
        reset();

    }


    return (
        <>
            <Helmet>
                <title>ورود</title>
            </Helmet>
            <div className="login_title">

                <h1>فرم ثبت نام</h1>
            </div>
            <div className="myloginformheader">
                <h2> در این فرم از ریداکس  <br />استفاده شده</h2>
             </div>
                <div className="mylogin">
                    <div className="mylogin-container">

                        <form className="myform" onSubmit={(e)=>submithandler(e)}  >
                            <input
                             type="text" className="form-control  mt-3  text-right" 
                             placeholder="نام کاربری" 
                             value={name}
                             onChange={(e)=> setName(e.target.value)}
                              />
                            <input type="name" value={email}
                            className="form-control  mt-3 text-right" 
                            placeholder="ایمیل"          
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                            
                            
                            <input type="text" value={password}
                            className="form-control  mt-3  text-right"  
                            placeholder="رمز"
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                        <Button variant="danger" type="submit" className="w-50 mb-2 mt-2" >ثبت</Button>
                        </form>
                    </div>
                    <div className="myformimg">
                        <img src={note2} fluid />
                    </div>

                </div>
                <Footer />
           
        </>
    );
}

export default Login;