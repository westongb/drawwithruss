import React, { useState, useCallback } from "react";

export default function Orderform (){

const [pictureId, setPictureId] = useState("default")

return(
    <div>
        <h1>Order This</h1>
        <h2>{pictureId}</h2>
    </div>
)

}