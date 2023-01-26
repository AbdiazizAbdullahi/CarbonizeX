import React from "react";
import { Link } from 'react-router-dom';


function Selector(){
    return(
        <div>
            <p>Carbon Facts </p>
            <h2>Lets Calculate your Emissions </h2>
            <h3>Choose one of the following</h3>
            <div>
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