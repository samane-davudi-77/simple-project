import React from 'react';
import { Alert, NavLink } from 'react-bootstrap';
import Footer from './Footer';
import MyFirstP from './MyfirstPost';



const Body = () => {
    return (
        <div>
            <div className='mybodystyle'>
                <div className="mysidenav">
                    <NavLink className="mysidenavli ">برنامه نویسی</NavLink>
                    <NavLink className="mysidenavli ">برنامه نویسی</NavLink>
                    <NavLink className="mysidenavli ">برنامه نویسی</NavLink>
                    <NavLink className="mysidenavli ">برنامه نویسی</NavLink>
                    <NavLink className="mysidenavli ">برنامه نویسی</NavLink>
                    <NavLink className="mysidenavli ">برنامه نویسی</NavLink>
                    <NavLink className="mysidenavli ">برنامه نویسی</NavLink>
                </div >
                <MyFirstP />
            </div>

            <Footer />
        </div>
    );
}

export default Body;