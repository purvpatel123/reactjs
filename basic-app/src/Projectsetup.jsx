import React from "react";

import Product from "./product";

function Projectsetup() {
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return (
        <>
            <div style={styles}>
                
                <Product title="apsras" idx={0} />
                <Product title="titanic" idx={1} />
                <Product title="ranger" idx={2} />
                <Product title="longer" idx={3} />
            </div>

        </>
    )
}
export default Projectsetup