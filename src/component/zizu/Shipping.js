import React from "react";

function Shipping(){
    return(
        <div>
            <div>
                <h4>Enter the Electricity Units to estimate</h4>
                <form>
                    <input type="number" />
                    <input type="number" />
                    <button>Estimate</button>
                </form>
            </div>

            <Ecard/>
        </div>
    )
}

export default Shipping;