import React, { useState, useCallback } from "react";
import "./gallary.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from "react-router-dom";
import OrderForm from "./Orderform";

import Orderform from "./Orderform";


export default function Lightbox (props){

const [image, setImage] = useState(props.views[props.currentIndex].src)
const [imageIndex, setImageIndex] = useState(props.currentIndex)
const [imageTitle, setImageTitle] = useState(props.views[props.currentIndex].title)


    return(
        <div className="lightbox">
            <div>
            <h1 className="imageTitle">Default Title</h1>
            <Link to={{
                pathname:`/Gallary/Orderform`,
                state:{
                    pictureId:{imageTitle}
                },
            }
            }><button>Buy It</button></Link>
            </div>
            <div>
            <img src={image} />
            </div>
       
           
          
          
    
        </div>
    )

}