import * as React from 'react';
import { useEffect, useState } from "react"

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import Textfeild from './Textfeild';
import axios from 'axios';




const theme = createTheme();

  function Loqin() {
     
  // const url = "http://localhost:5000/api/auth/login"
  // try {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(user)

  //   });
  //   var json = await response.json();
  //   console.log(json);

  // } catch (err) {
  //   console.log(err);
  // }


  const validate = Yup.object({
    mobileno: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, 'Must be exactly 10 digits')
      .max(10, 'Must be exactly 10 digits'),
    password: Yup.string().min(8, 'Password Must be atleast 8 character').required('Password is Required')

  })
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   const UserLogin = async () => {
      
  //   }
  //   UserLogin();

  // }, [user]);
  const navigate = useNavigate();


  const handleSUbmitForm = async (values) => {
    setUser(values)
    const url = "http://localhost:5000/api/auth/login"
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)

        });
        var json = await response.json();
        console.log(json);
        let errorMessage = document.getElementById('errorMessage');
        errorMessage.innerHTML = `<p>${json.error}</p>`;

        if(json.status){
          navigate('/')
        }

      } catch (err) {
        console.log(err);
      }
    console.log(values);

  }
  return (

    <Formik
      initialValues={{
        mobileno: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={handleSUbmitForm}
    >{

        formik => (

          // {console.log("")}


          <Form>

            <ThemeProvider theme={theme}>
              <Container sx={{ width: '500px' }}>
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'

                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    {/* <LockOutlinedIcon /> */}
                  </Avatar>

                  <Typography component="h1" variant="h5">
                    Log In
                  </Typography>


                  <Box noValidate sx={{ mt: 1 }}>
                    {/* {console.log(json)} */}
                    <Textfeild label="Mobile No" name="mobileno" type="text" />

                    <Textfeild label="Password" name="password" type="password" sx={{ marginBottom: '0' }} />

                    <div id='errorMessage' style={{color:'red',fontSize:'12px'}}></div>


                    <button className="btn btn-primary mt-3 mb-3" type='submit'>Log
                      in</button>



                    <div className='d-flex' style={{ flexDirection: 'column', width: '250px' }}>

                      <div>

                        <NavLink to="#" style={{ fontSize: '14px' }} >Forget Password?</NavLink>
                      </div>
                      <div>

                        <NavLink to="/register" style={{ fontSize: '14px' }}>Don't Have an Account ? Register</NavLink>
                      </div>

                    </div>







                  </Box>

                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
              </Container>
            </ThemeProvider>

          </Form>
        )
      }
    </Formik>

  );
}

export default Loqin;