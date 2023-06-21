import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfeild from './Textfeild';
import './login.css'

const theme = createTheme();

function Loqin() {
  const validate = Yup.object({
    mobileno: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, 'Must be exactly 10 digits')
      .max(10, 'Must be exactly 10 digits'),
    password: Yup.string().min(8, 'Password Must be atleast 8 character').required('Password is Required')

  })
  
  const navigate = useNavigate();


  const handleSUbmitForm = async (values) => {
     
    const url = "http://localhost:5000/api/auth/login";
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }); 
        let json = await response.json(); 
        let errorMessage = document.getElementById('errorMessage');
        errorMessage.innerHTML = `<p>${json.message}</p>`;
        if (json.status) {
          navigate('/')
        }
      } catch (err) {
        console.log("Something is wrong in try block", err);
      }
   
  }
  return (
    <div>
      <Formik
        initialValues={{
          mobileno: '',
          password: ''
        }}
        validationSchema={validate}
        onSubmit={handleSUbmitForm}
      >{
          formik => (
            <Form >
              <ThemeProvider theme={theme} sx={{ backgroundColor: '#b5fac7' }}>
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
                    {/* <LockOutlinedIcon /> */}
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Log In
                  </Typography>
                  <Box noValidate sx={{ mt: 1 }}>
                    {/* {console.log(json)} */}
                    <Textfeild label="Mobile No" name="mobileno" type="text" />
                    <Textfeild label="Password" name="password" type="password" sx={{ marginBottom: '0' }} />
                    <div id='errorMessage' style={{ color: 'red', fontSize: '12px' }}></div>
                    <button className="btn btn-success mt-3 mb-3" type='submit'>Log
                      in</button>
                    <div className='d-flex' style={{ flexDirection: 'column', width: '250px' }}>
                      <div>
                        <NavLink to="#" style={{ fontSize: '14px', color: '#000000' }} >Forget Password?</NavLink>
                      </div>
                      <div>
                        <NavLink to="/register" style={{ fontSize: '14px', color: '#000000' }}>Don't Have an Account ? Register</NavLink>
                      </div>
                    </div>
                  </Box>
                </Box>
              </ThemeProvider>
            </Form>
          )
        }
      </Formik>
    </div>

  );
}

export default Loqin;