import React, { useState, useCallback } from "react";
import "./gallary.css"

export default function Lightbox (props){

const [image, setImage] = useState(props.views[props.currentIndex].src)
const [imageIndex, setImageIndex] = useState(props.currentIndex)

    return(
        <div className="lightbox">
            <div>
            <h1 className="imageTitle">Default Title</h1>
            <a href='www.google.com/'><button>Buy It</button></a>
            </div>
            <div>
            <img src={image} />
            </div>
        </div>
    )

}