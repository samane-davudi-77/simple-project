import React , {useState} from "react";
import { Alert } from "react-bootstrap";
import "./App.css";
import Login from "./components/Login";
import HeadNavbar from "./components/Navbar";
import {Route,Switch} from "react-router-dom"
import MyNotebook from "./components/MyNotebook";
import MyHome from "./components/MyHome";
import { nanoid } from "@reduxjs/toolkit";
import Footer from "./components/Footer";
import MyFirstP from "./components/MyfirstPost";




const App = () => {
  
  return ( 
    <div className="Appcontainer" >
      <HeadNavbar />
      <Switch>
       <Route path="/notebook" component={MyNotebook} />
     <Route path="/login" component={Login} />
     <Route path="/" component={MyHome}/>
     </Switch>
      
     
    </div>
    
   );
}
 

 
export default App;