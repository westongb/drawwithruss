import React, { useState, useCallback } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

export default function Orderform (props){


const [pictureId, setPictureId] = useState("trial")

return(
    <div>
        <h1>Order This</h1>
        <h2>{pictureId}</h2>
    </div>
)

}