import React, { useState, useCallback } from "react";
import "./gallary.css";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";


export default function Lightbox (props){

const [image, setImage] = useState(props.views[props.currentIndex].src)
const [imageIndex, setImageIndex] = useState(props.currentIndex)

    return(
        <div className="lightbox">
            <div>
            <h1 className="imageTitle">Default Title</h1>
      
            <Link to="/order"><button>Buy It</button></Link>
        
            </div>
            <div>
            <img src={image} />
            </div>
        </div>
    )

}