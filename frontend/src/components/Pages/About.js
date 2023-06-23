import React from "react";
import NavBar from "../NavBar";
// import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import "./about.css";

export const About = () => {
  const Mycon = styled(Box)({
    margin: "2% 3%",
    textAlign: "left",
    fontSize: "1.5rem",
  });
  return (
    <div>
      <div className="sticky-top">
        <NavBar />
      </div>
      <Mycon>
        <ul>
          <li>
            <div className="mx-4">
              <Typography component="h3" variant="h4" >
                Welcome to our website!
              </Typography>
              <p style={{fontWeight:350}}>
                We are a dedicated team passionate about providing high quality
                services and ensuring best user experience for our visitors.
              </p>
            </div>
          </li>
          <br/>
          <li>
            <div className="mx-4">
              <Typography component="h3" variant="h4">
                Our Story
              </Typography>
              <p style={{fontWeight:350}}>

              Our journey began with a simple idea: to create something
              meaningful that could make positive impact on people's lives.
              <br />
              Solution is to connect the local servicemen to every customer in
              need of any service at his/her fingertips.
              <br />
              Then our team decided and dived into the process of creating this
              product.
              </p>
            </div>
          </li>
          <br/>
          <li>
            <div className="mx-4">
              <Typography component="h3" variant="h4">
                Our Team
              </Typography>
              <div>
                <p style={{fontWeight:350}}>

                Dev Prajapati
                <br/>
                Parth Makwana
                <br/>
                Vatsal Patel
                <br/>
                Shreyansh Chauhan
                </p>
              </div>
            </div>
          </li>
        </ul>
      </Mycon>
    </div>
  );
};