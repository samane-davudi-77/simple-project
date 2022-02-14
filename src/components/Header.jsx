import React from 'react';
import { Alert } from 'react-bootstrap';


const Header = () => {
    return ( 
        <div>
            <Alert variant="info" className="mt-2" >
            <h1>دفترچه یادداشت من</h1>
            </Alert>
        </div>
     );
}
 
export default Header;