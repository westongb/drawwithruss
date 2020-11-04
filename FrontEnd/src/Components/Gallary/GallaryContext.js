import React, {createContext, useState} from 'react';

const GallaryContext = createContext(

)

function GallaryProvider(props){

const [currentImage, setCurrentImage] = useState(  {
    src: "none",
    title: "none",
    width: 3,
    height: 2,
    price: 1.11
  });
const [shoppingCart, setShoppingCart] = useState([])

return(
    <GallaryContext.Provider value={{currentImage, setCurrentImage, shoppingCart, setShoppingCart}}>
        {props.children}
    </GallaryContext.Provider>
)

}

const GallaryConsumer = GallaryContext.Consumer;

export {GallaryContext, GallaryConsumer, GallaryProvider};
