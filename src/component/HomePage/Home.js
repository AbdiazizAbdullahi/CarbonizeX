import React from "react";
import { Link } from "react-router-dom"

function Home(){
    return(
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>CarbonizeX</h1>
                    <h2>Join the climate conscious movement</h2>
                    <button className="h-btn"><Link className="btn-link" to="/estimate" >Know your emissions</Link> </button>
                </div>
            </header>
            <div  className="bg2-image">
                <div className="bg2-container">
                    <div className="">
                       <p className="bg-body pos1">"Climate change is the biggest global threat facing our planet, and it is the responsibility of each and every one of us to take action."  <small>- Leonardo DiCaprio</small></p> 
                    </div>
                    <div>
                       <p className="bg-body pos2">"We are the first generation to feel the impact of climate change and the last generation that can do something about it." <small>- John Kerry</small></p> 
                    </div>
                </div> 
            </div>

            <footer >
            <div className="footer">
                <ul>
                    <li><Link exact to="/estimate">Estimate</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>

                <p> All rights reserved.</p>
            </div>
        </footer>
        </React.Fragment>
    )
}

export default Home;