import React, { useState } from "react";
//import Ecard from "./EmissionCard";

const Stima = () => {
  const [response, setResponse] = useState({});
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      type: 'electricity',
      electricity_unit: 'kwh',
      electricity_value: (inputValue),
      country: 'gb',
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

  console.log(response)


  return(
    <div>
        <div>
            <h4>Enter the Electricity Units to estimate</h4>
            <form onSubmit={handleSubmit}>
                <input type="number" value={inputValue} onChange={handleChange}/>
                <button type="submit">Estimate</button>
            </form>
        </div>

        {response.data && response.data.attributes && <p>Carbon Emission: {response.data.attributes.carbon_kg} kg</p>}
        
    </div>
  )
}

export default Stima;
