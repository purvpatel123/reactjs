import React from "react";
import Price from "./price";
import './App.css'
function Product({title,idx}) {
    let oldprice=[199,299,399,499]
    let newprice=[299,399,499,599]
    let description=[["abcd","purv"],["efgh","priya"],["ijkl","kirty"],["mnop","prachi"]]
    return (
        <>
            <div className="Product">
            <h1>{title}</h1>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
            </div>
        </>
    );
}
export default Product;
