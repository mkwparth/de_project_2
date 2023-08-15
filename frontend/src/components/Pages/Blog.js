import React from "react";
import NavBar from "../NavBar";

export const Blog = () => {
  return (
    <>
      <div className='sticky-top'>
          <NavBar />
      </div>
      <div style={{
        display:'flex',
        width:'100vw',
        height:'100vh',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <h1>પ્રતિસાદ અમને આપો.</h1>
      </div>
    </>
  );
};
