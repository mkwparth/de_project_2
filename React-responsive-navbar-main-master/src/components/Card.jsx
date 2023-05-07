import React from "react";
import { Link } from "react-router-dom";
import Servmen from "./Pages/Servmen";
// import axios from 'axios';

const Card = (props) => {
  return (
    
    <div style={{textAlign:'center'}}>
      <div className="card" style={{width:"250px", backgroundColor:"#e4fdff", margin:"0 auto"}}>
        <div style={{textAlign:"center"}}>
          <img src={props.imgN} className="card-img-top img-fluid" alt="" style={{width:"200px"}}/>
        </div>
        <div className="card-body">
          <h4 className="card-title text-success">{props.name}</h4>

          <Link to={`/Servmen/${props.name}`} state={{from: props.name}}  className="btn btn-success btn-lg">
            Book Now

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
