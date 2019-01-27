import React from "react";
import "./style.css";

function Square(props){
    return(
        <div className="image col-md-3 col-sm-4" data-id={props.id}  data-clicked={props.isClicked} onClick={()=>props.clickedCartoon(props.id)}>
                <img className='img-thumbnail' alt="image should show up" src={props.image}/>
        </div>
    );
};

export default Square;