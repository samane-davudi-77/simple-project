import React from 'react';
import { Navbar , Container, Nav, Form, FormControl,Button  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import IMG from "../assest/notebook.jpg"
const HeadNavbar = () => {
    return ( 
        <Navbar bg="dark" expand="lg ">
            <img src={IMG} width="5%" className="mr-2" />
          <Navbar.Brand className="text-light">بلاگ من</Navbar.Brand>
        <Container fluid className="rtl">
            <Nav className="me-auto my-2 my-lg-0 rtl" >
          <NavLink className="mr-4" to="/" activeStyle={{color : "white"}}>خانه</NavLink>
          <NavLink className="text-white mr-4" to="/notebook">دفترچه یادداشت</NavLink>
          <NavLink className="text-white mr-4" to="/Login">ثبت نام</NavLink>
          </Nav>
          <Form className="d-flex mr-5">
        <FormControl
          type="search"
          placeholder="جستجو"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">جستجو</Button>
      </Form>
        </Container>
      </Navbar>
     );
}
 
export default HeadNavbar;