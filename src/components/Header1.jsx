import React from 'react';
import blog from "../assest/websitebackground.jpg";
import { Alert, Button, Image, Card, Form,FormControl} from 'react-bootstrap';
import Body from './Body1';

const Header1 = () => {

    const myimg = blog;

    return (
        <>
            <div className="myheaderimg">
                <Image className="myimg" src={myimg} width="100%">
                </Image>
                <Card className="mycard">
                    <Card.Body>
                        <Card.Title className="myfontsize">وبلاگ من</Card.Title>
                        <Card.Text className="myfontsize">این اولین وبسایت من با ریداکس هست</Card.Text>
                        <h2>یک نمونه کار ساده برای شما</h2>
                    </Card.Body>
                </Card>
                <Button className="myheadbtn" variant="outline-dark" >hello</Button>
                <Button className="myheadbtn1" variant="dark" >hello</Button>

            </div>
            <Card className="mysecondcard">
                
                    <Form className="d-flex p-2">
                        <FormControl
                            type="search"
                            placeholder="جستجو"
                            className=""
                            aria-label="Search"
                        />
                        <Button variant="outline-light">جستجو</Button>
                    </Form>
               

            </Card>

        </>
    );
}

export default Header1;