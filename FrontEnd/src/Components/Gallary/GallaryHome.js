import React, { useState, useEffect, useContext  } from "react";
import NavBar from "../../NavBar";
import Gallary from "./gallary";
import {GallaryContext, GallaryProvider} from "./GallaryContext";

export default function GallaryHome(){

return(
    <div>
        <Gallary/>
    </div>
)

}