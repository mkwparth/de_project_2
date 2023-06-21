import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import NavBar from '../NavBar';
import {useLocation } from 'react-router-dom';
// const location = useLocation()
// location.pathname




  
  const Servmen = (props) => {
    
    const location = useLocation()
    let str = location.pathname;
    let serviceType = str.split('/')[2];
    
    const[data,setData] =  useState([]);
    const rows = data;

    // const location = useLocation();
    const {from} = location.state;
    console.log(from);
    // useEffect(()=>{
    //   // const handleClick = async ()=>{
    //     // http://localhost:5000/api/services/carpenter
    //   //   // axios.get('http://localhost:5000/api/services/carpenter')
    //   //   const url = `http://localhost:5000/api/services/carpenter`;
    //   // }
      
    //   const getAllServiceMan = async ()=>{
    //     const serviceType = 'carpenter'
        // const url = `http://localhost:5000/api/services/${serviceType}`;
        // const response = await fetch(url, {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // });
        // var json = await response.json();
        // console.log(json);
    //     setData(json.services);
    //     console.log(data);
    //   }
    //   getAllServiceMan();
    // });

  //  const handleOnload = ()=>{
  //   console.log("onload is called");  
  //  }
  useEffect(()=>{
    const url = `http://localhost:5000/api/services/${serviceType}`;
    const fetchServiceMan = async()=>{
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      var json = await response.json();
      setData(json.services);
      console.log("hello world",json.services);

    }

    fetchServiceMan();
  },[serviceType])

  console.log("I am varun ",data);
  return (
    <>
        <NavBar />
        <Container sx={{mt:4}}  >
      <TableContainer component={Paper} sx={{backgroundColor: "#e4fdff"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='bg-success'>
          <TableRow>
            <TableCell sx={{color:"white"}}><strong>Name</strong></TableCell>
            <TableCell align="right" sx={{color:"white"}}><strong>Mobile No.</strong></TableCell>
            <TableCell align="right" sx={{color:"white"}}><strong>Area</strong></TableCell>
            <TableCell align="right" sx={{color:"white"}}><strong>Email</strong></TableCell>
            <TableCell align="right" sx={{color:"white"}}><strong>Service Provides</strong></TableCell>
            <TableCell align="right" sx={{color:"white"}}><strong>Ratings</strong></TableCell>
            <TableCell align="right" sx={{color:"white"}}><strong>Service Charge</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.mobileno}</TableCell>
              <TableCell align="right">{row.area}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.serviceProvide}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.serviceCharge}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
  )
}

export default Servmen
