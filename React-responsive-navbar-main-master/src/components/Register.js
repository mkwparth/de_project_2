import React, { cloneElement } from 'react'
import axios from "axios";

// import './register.css'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Textfeild from './Textfeild';
import { Link, useNavigate } from 'react-router-dom';
// import { Grid, ListItem, TextField } from '@mui/material';

const Register = () => {
    const validate = Yup.object({
        name:Yup.string().required('Required'),
        mobileno:Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits'),
        password:Yup.string().min(8,'Password Must be atleast 8 character').required('Password is Required'),
        cpassword:Yup.string().oneOf([Yup.ref('password'),null],"Password Must be Same").required('Confirm Password is Required'),
        houseno:Yup.number("Digit Only").required('Required').typeError('House No Must be digit only'),
        society:Yup.string().required('Required'),
        area:Yup.string().required('Required'),
        city:Yup.string().required('Required'),
        pincode:Yup.string().max(6,"Must be 6 digit pincode").min(6,"Must be 6 digit pincode").matches(/^[0-9]+$/, "Must be only digits").required("Required").typeError('pincode must be digit only')
    })
    const navigate = useNavigate();

    const handleSubmit = async (values)=>{
        const {name,mobileno,password,houseno,society,area,city,pincode} = values;

        // create object
        const user ={
            name,mobileno,password,houseno,society,area,city,pincode
        }

        try {
            // makw a request
              axios.post("http://localhost:5000/api/auth/register",user);
              navigate('/login')
            

        } catch (err) {
            console.log(err);
        }
        

        console.log(user);
         
    }
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    mobileno: '',
                    password: '',
                    cpassword: '',
                    houseno: '',
                    society: '',
                    area: '',
                    city: '',
                    pincode: ''
                }}
                validationSchema={validate}
                onSubmit={handleSubmit}

            >
                {
                    formik => (
                        <div className='container '>
                            <h1 className='my-4 font-weight-bold-display-4 text-center'>Register</h1>
                            <Form>
                                <div className='container' style={{ width: '600px', height: '640px' }}>

                                    <Textfeild label="Name" name="name" type="text" />
                                    <Textfeild label="Mobile No" name="mobileno" type="text" />
                                    <Textfeild label="Password" name="password" type="password" />
                                    <Textfeild label="Confirm Password" name="cpassword" type="password" />
                                    <Textfeild label="House No" name="houseno" type="text" />
                                    <Textfeild label="Society Name" name="society" type="text" />
                                    <Textfeild label="Area" name="area" type="text" />
                                    <Textfeild label="City" name="city" type="text" />
                                    <Textfeild label="Pincode" name="pincode" type="text" />
                                <div className="d-flex justify-content-between" >
                                    <button className="btn btn-success mt-3 mb-3" type='submit'>Register</button>
                                    <button className="btn btn-danger mt-3 mb-3" type='reset'>Reset</button>
                                    <Link to='/login'>
                                    
                                    <button className="btn btn-success mt-3 mb-3">Already have an Account ? Login</button>
                                    </Link>
                                </div>
                                </div>
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </>
    )
}

export default Register
