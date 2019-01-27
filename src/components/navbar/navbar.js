import React from "react";


function Navbar (props){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <div className="row">
        <div className="col-lg-6">
  <a className="navbar-brand" href="#">Clicky Game</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        </div>
        </div>
        
  <div className="collapse navbar-collapse col-lg-6 justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active ">
        <p className="nav-link">{props.whattodo}<span className="sr-only">(current)</span></p>
      </li>
         
      <li className="nav-item-4 ">
        <p className="nav-link">Score : {props.score} |</p>
      </li>
      <li className="nav-item">
        <p className="nav-link">| Top Score: {props.topscore}</p>
      </li>
      
    </ul>
  </div>
</nav>


    )}

    export default Navbar;