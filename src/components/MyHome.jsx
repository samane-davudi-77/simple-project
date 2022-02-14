import React, { useState } from 'react';
import { Alert, Button, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import catimg from "../assest/95684.jpg";
import catimg2 from "../assest/95687.jpg";
import blog from "../assest/websitebackground.jpg";
import Header1 from './Header1';
import { Link,Route ,Switch} from 'react-router-dom';
import Header2 from './Header2';
import Header3 from './Header3';
import Body from './Body1';
import Footer from './Footer';


const MyHome = () => {


   
   return (
      <>
         <Helmet>
            <title>
               خانه
            </title>

         </Helmet>
         <div className="mygrid">
            <Switch>
            <Route path="/" exact component={Header1} />
            <Route path="/header2" component={Header2} />
            <Route path="/header3" component={Header3} />
            </Switch>
            <div className="myrowgrid">
                   <Link to="/">
                  <button className="btn btn-dark" name="btnone" >یک</button>
               </Link>
                   <Link to="/header2">
                  <button className="btn btn-dark" name="btnone" >دو</button>
               </Link>
                   <Link to="/header3">
                  <button className="btn btn-dark" name="btnone" >سه</button>
               </Link>
         

            </div>
         </div>
         <Body />
      </>
   );
}

export default MyHome;