import React from "react";

function Ecard({amount}){
    return(
        <div>
            <div>
                <h3>The amount of carbon the will be emmitted</h3>
                <h1>{amount}KG</h1>
            </div>
        </div>
    )
}

export default Ecard;