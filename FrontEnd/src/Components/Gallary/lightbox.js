import React, {useContext, useState, useEffect } from "react";
import "./gallary.css";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import {GallaryConsumer, GallaryContext, GallaryProvider} from "./GallaryContext";
import Orderform from "./Orderform";

export default function Lightbox (props){

const [image, setImage] = useState(props.views[props.currentIndex])
const [imageLink, setImageLink] = useState(props.views[props.currentIndex].src)
const [imageIndex, setImageIndex] = useState(props.currentIndex)
const [imageTitle, setImageTitle] = useState(props.views[props.currentIndex].title)
const {currentImage, setCurrentImage} = useContext(GallaryContext)

//set context for use in Order Form
useEffect(()=>{
    setCurrentImage(image)
})

    return(
 
        <div className="lightbox">
              
            <div>
            <h1 className="imageTitle">Default Title</h1>
            <Link to={{
                pathname:`/Gallary/Orderform`
            }
            }><button >Buy It</button></Link>
            </div>
            <div>
            <img src={imageLink} />
            </div>
      
          
          
    
        </div>
    )

}