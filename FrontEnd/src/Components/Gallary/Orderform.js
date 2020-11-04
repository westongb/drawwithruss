import React, { useState, useContext } from "react";
import {GallaryConsumer, GallaryContext, GallaryProvider} from "./GallaryContext";

export default function Orderform (props){

const {currentImage, shoppingCart, setShoppingCart} = useContext(GallaryContext);
const [pictureId, setPictureId] = useState("trial")

//add image to shopping cart
const addToCart =()=> {
    setPictureId({...currentImage})
}

return(
 
    <div>
    
           <GallaryConsumer>
               {
        render=>{
        return <div>
        <h1>Order This</h1>
        <h2>{currentImage.title}</h2>
        <img src={currentImage.src}></img>
        <h3>{currentImage.price}</h3>
        <br></br>
        <button onClick={addToCart}>Add to Cart</button>
        </div>
        }}
        </GallaryConsumer>
      
    </div>
   
)

}