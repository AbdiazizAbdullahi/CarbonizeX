import React from "react";

function Shipping(){
    return(
        <div>
            <div>
                <h4>Enter details of the shipped item</h4>
                <form>
                    <input type="number" />
                    <input type="number" />
                    <button>Estimate</button>
                </form>
            </div>
        </div>
    )
}

export default Shipping;