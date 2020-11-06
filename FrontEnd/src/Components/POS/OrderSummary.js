import { render } from "@testing-library/react";
import React, { useState, useCallback, useContext } from "react";
import {GallaryContext, GallaryConsumer} from "../Gallary/GallaryContext";


export default function OrderSummary() {

const {shoppingCart} = useContext(GallaryContext)
let totalPrice = 0;


function sumPrice(shoppingCart){
    for(let i =0; i < shoppingCart.length; i++){
       let totalPrice = shoppingCart[i].price++;
       return totalPrice
    }
}

console.log(totalPrice)
    return(
        <div>
            
            <h1>Art Purchase</h1>
            <table>
                <thead>
                <tr>
                    <td colSpan="4"><h2>Art Purchases</h2></td></tr>
                <tr>
            <th><td>Name</td><td>Price</td><td>Image</td></th>
            </tr>
            </thead>
            <tbody>
            <GallaryConsumer> 
            { render => shoppingCart.map((item) => {
    return <tr >
        <td style={{margin:"0, 0, 0, -5%"}}>{item.title}</td><td>{item.price}</td><td><img style={{height: "100px"}} src={item.src}></img></td>
    </tr>
})}
            </GallaryConsumer>
            <tr>
            <td>{totalPrice}</td>
            </tr>
            </tbody>
            </table>
        </div>

    );


}