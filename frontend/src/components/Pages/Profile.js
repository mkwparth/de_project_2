import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { Box, Container, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

export const Profile = () => {

  const [data, setData] = useState({});
  const navigate = useNavigate();

  const rows = data;
  const userToken = localStorage.getItem('userId')

  useEffect(() => {
    const url = `http://localhost:5000/api/services/name/${userToken}`;
    const fetchServiceMan = async () => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      var json = await response.json();
      // console.log("something data:",json)
      setData(json);
      // console.log("hello world", json.services);


    }
    fetchServiceMan();
  }, [userToken])
  console.log("data", data)

  const handleLogout = ()=>{
    localStorage.removeItem("userId");
    navigate('/register')
  }
  return (
    <div className='sticky-top'>
      <NavBar />
      <Container sx={{ mt: 4, display: 'flex' }} >
        <Box display="flex" >
          <Box sx={{ marginLeft: '250px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <TableContainer sx={{ width: '600px', height: '400px', backgroundColor: "#e4fdff" }}>
              <Table sx={{ width: '600px', height: '400px' }} aria-label="simple table">
                <TableHead >
                  <TableRow >
                    <TableCell sx={{ color: "white" }} className='bg-success'><strong>Name</strong></TableCell>
                    <TableCell align="center" sx={{ color: "black" }}><strong>{data.name}</strong></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell sx={{ color: "white" }} className='bg-success'><strong>Mobile No</strong></TableCell>
                    <TableCell align="center" sx={{ color: "black" }}><strong>{data.mobileno}</strong></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell sx={{ color: "white" }} className='bg-success'><strong>House No</strong></TableCell>
                    <TableCell align="center" sx={{ color: "black" }}><strong>{data.houseno}</strong></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell sx={{ color: "white" }} className='bg-success'><strong>Society Name</strong></TableCell>
                    <TableCell align="center" sx={{ color: "black" }}><strong>{data.society}</strong></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell sx={{ color: "white" }} className='bg-success'><strong>Area</strong></TableCell>
                    <TableCell align="center" sx={{ color: "black" }}><strong>{data.area}</strong></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell sx={{ color: "white" }} className='bg-success'><strong>City</strong></TableCell>
                    <TableCell align="center" sx={{ color: "black" }}><strong>{data.city}</strong></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell sx={{ color: "white" }} className='bg-success'><strong>Pincode</strong></TableCell>
                    <TableCell align="center" sx={{ color: "black" }}><strong>{data.pincode}</strong></TableCell>
                  </TableRow>

                </TableHead>
                <TableBody>
                  {/* {rows.map((row) => (
                <TableRow
                  key={row.Name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.mobileno}</TableCell>

                </TableRow>
              ))} */}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

      </Container>
      <div className="mt-4">
        <Link className='btn btn-primary' sx={{ color: 'white', display: 'flex', margin: 'auto', width: '80px', height: '30px', padding: '2px', alignItems: 'center', justifyContent: 'center',textDecoration:'none' }} to='/register' onClick={handleLogout}>Logout</Link>
      </div>
    </div>
  );
};
