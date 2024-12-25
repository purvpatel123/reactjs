import React from "react";

function Naming({ product, price }) 
     {
        let styles={backgroundColor:price>1000?"grey":"yellow"}
        return (
            <>
                <div className="NameOf" style={styles}>
                    <h1>{product}</h1>
                    {price>1000? <p>discount of 5%</p>:null}
                  
                </div>
            </>
        )
    


}
export default Naming;