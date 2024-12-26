import React from "react";

function Price({ oldprice, newprice }) {
    let oldStyle = {
        textDecorationLine: "Line-through",
    }
    let newStyle = {
        fontWeight: "bold",
    }
    let Styles = {
        backgroundColor: "grey",
        height: "50px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",

    }
    return (
        <>
            <div style={Styles}>
                <span style={oldStyle}>{oldprice}</span>
                &nbsp;

                <span style={newStyle}>{newprice}</span>
            </div>
        </>
    );
}
export default Price;
