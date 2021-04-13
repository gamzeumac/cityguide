import React from 'react';
import '../scss/Footer.scss';

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title"> About Me </h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!"> Contact Me</a>
              </li>
              <li>
                <a href="#!">Sign-up</a>
              </li>

            </ul>
            

          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Home</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Paris</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"> Venedig</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Forum</a>
              </li>

            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}



export default Footer;
