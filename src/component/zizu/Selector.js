import React from "react";
import { Link } from 'react-router-dom';


function Selector(){
    return(
        <div className="main">
            <p className="main-p">Carbon Facts </p>
            <h2 className="main-h2">Lets Calculate your Emissions </h2>
            <h3 className="main-h3">Choose one of the following</h3>
            <div className="main-div">
                <ul>
                    <li>
                        <Link to="/zizu/Stima">Electricity</Link>
                    </li>
                    <li>
                        <Link to="/zizu/Fuel">Fuel</Link>
                    </li>
                    <li>
                        <Link to="/zizu/Shipping">Shipping</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Selector;