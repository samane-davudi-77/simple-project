import React , {useState} from "react";
import Header from "./Header";
import Search from "./Search";
import NoteList from "./NoteList";
import { Helmet } from "react-helmet";
import MyNotebook from "./MyNotebook";
import MyHome from "./MyHome";
import { Route, Switch } from "react-router";

const MyApp = () => {
  
  return ( 
    <>
    <Helmet>
      <title>
        خانه
      </title>
    </Helmet>
    <div className="App-container">
    
     
    </div>
    </>
    
   );
}
 

 
export default MyApp;