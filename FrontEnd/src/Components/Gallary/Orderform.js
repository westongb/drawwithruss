import React, { useState, useContext } from "react";
import {GallaryConsumer, GallaryContext, GallaryProvider} from "./GallaryContext";
import {LoginContext} from "../Login/Authentication"
import {
    Link
  } from "react-router-dom";
export default function Orderform (props){

const {currentImage, shoppingCart, setShoppingCart} = useContext(GallaryContext);
const [pictureId, setPictureId] = useState("trial")




//add image to shopping cart
const addToCart =()=> {
    setShoppingCart([...shoppingCart, currentImage])
}

//variable for shopping cart array

let cartArray


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
        <br></br>
        <Link to="/Gallary"><button>Keep Shopping</button></Link>
        <br></br>
        <Link to="/ShoppingCart"><button >Finalize Order</button></Link>
        </div>
        }}
        </GallaryConsumer>
      
    </div>
   
)

}