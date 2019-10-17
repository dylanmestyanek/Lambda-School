import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; 
import axios from "axios"

const Page = (props) => {
    const obj = props.data.find(item => item.title === props.match.params.title);
    const [productList, setProductList] = useState(obj);

    useEffect(() =>
        setProductList(obj)
    , [props.match.params.title]);

    axios.get("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f")
        .then(respo => console.log(respo))
        .catch(err => console.log(err))

    return (
        <div className="apple-products">
           {Object.values(productList.content).map(item => <NavLink>{item}</NavLink>)}
        </div>
    );
};

export default Page;