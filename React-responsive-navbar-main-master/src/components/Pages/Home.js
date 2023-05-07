import Card from "../Card";
import React from "react";
import carpenter from "../images/carpenter.png"
import p from "../images/painter.png"
import p1 from "../images/plumber.png"
import e1 from "../images/electric.png"
import p2 from "../images/pestcontrol.png"
import Seravai from "../Seravai";
import NavBar from "../NavBar";
import './home.css'

export const Home = () => {
  return (
    <>
      <div className='sticky-top'>
          <NavBar />
          <Seravai />
      </div>
      <div className="container">
        <div className="row gy-3">
          <div className="col-sm-4"><Card imgN={carpenter} name="Carpenter"/></div>
          <div className="col-sm-4"><Card imgN={e1} name="Electrician"/></div>
          <div className="col-sm-4"><Card imgN={p} name="Painting"/></div>
          <div className="col-sm-4"><Card imgN={p1} name="Plumber"/></div>
          <div className="col-sm-4"><Card imgN={p2} name="Pest Control"/></div>
          <div className="col-sm-4"><Card imgN={p1} name="cleaner"/></div>
          <div className="col-sm-4"><Card imgN={p1} name="Plumbing"/></div>
          <div className="col-sm-4"><Card imgN={p1} name="Plumbing"/></div>
          <div className="col-sm-4"><Card imgN={p1} name="Plumbing"/></div>
        </div>
      </div>
    </>
  );
};
