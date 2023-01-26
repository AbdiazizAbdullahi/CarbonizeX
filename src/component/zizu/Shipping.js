import React, {useState} from "react";
import { Link } from "react-router-dom";

const Shipping = () => {
    const [response, setResponse] = useState({});
    const [weight, setWeight] = useState('');
    const [distance, setDistance] = useState('');
    
    
    
    const handleWeightChange = (event) => {
      setWeight(event.target.value);
    }

    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
      }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const requestBody = {
        type: "shipping",
        weight_value: ((weight) * 1000),
        weight_unit: "g",
        distance_value: (distance),
        distance_unit: "km",
        transport_method: "truck"
      };
  
      try {
        const res = await fetch('https://www.carboninterface.com/api/v1/estimates', {
          method: 'POST',
          headers: {
            Authorization: `Bearer v7qsKOiNCcIiEUooI5cmTA`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });
        const data = await res.json();
        setResponse(data);
      } catch (err) {
        console.error(err);
      }
    };
  
  
      return(
          <div>
              <div>
                  <h4>Enter the Shipping Units to estimate</h4>
                  <form onSubmit={handleSubmit}>
                      <input type="number" value={weight} onChange={handleWeightChange} placeholder="weight" />
                      <input type="number" value={distance} onChange={handleDistanceChange} placeholder="distance" />
                      <button type="submit">Estimate</button>
                  </form>
                  <Link to="../visual/GetData" >TableLink</Link>
              </div>
  
              {response.data && response.data.attributes && <p>Carbon Emission: {response.data.attributes.carbon_kg} kg</p>}
              
          </div>
      )
  }

export default Shipping;