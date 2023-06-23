import React from "react";
import NavBar from "../NavBar";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import './contact.css'
const Contact = () => {
  const Mycon = styled(Box)({
    margin: "2% 3%",
    textAlign: "left",
    fontSize: "1.5rem",
  });
  return (
    <div>
      <div className='sticky-top'>
        <NavBar />
      </div>
      <Mycon>
        <ul>
          <li>
            <div className="mx-4">
              <Typography component="h3" variant="h4">
                Address
              </Typography>
              <p style={{ fontWeight: 350 }}>
                Vishwakarma Government Engineering college, <br />
                Nr. Visat Three Roads, Sabarmati-Koba Highway, <br />
                Chandkheda Gam Road, Nigam Nagar, <br />
                Chandkheda, Ahmedabad - 382424.
              </p>
            </div>
          </li>
          <br />
          <li>
            <div className="mx-4">
              <Typography component="h3" variant="h4">
                Phone
              </Typography>
              <p style={{ fontWeight: 350 }}>
                +91 70160 04967
                <span style={{ fontWeight: 100 }}>
                  (Dev Prajapati)

                </span>

              </p>
            </div>
          </li>
          <br />
          <li>
            <div className="mx-4">
              <Typography component="h3" variant="h4">
                Mail
              </Typography>
              <div>
                <p>
                  <a href="mailto:dev13prajapati@gmail.com" id="atag">dev13prajapati@gmail.com</a>
                </p>
              </div>
            </div>
          </li>
          <br />
          {/* <li>
            <div className="mx-4">
              <Typography component="h3" variant="h4">
                LinkdIn 
              </Typography>
              <div>
                
              </div>
            </div>
          </li> */}
        </ul>
      </Mycon>
    </div>
  );
};

export default Contact;