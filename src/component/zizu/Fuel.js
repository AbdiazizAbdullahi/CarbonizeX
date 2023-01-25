import React from "react";


const Fuel = () => {
  const [response, setResponse] = useState({});
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
        type: "fuel_combustion",
        fuel_source_type: "dfo",
        fuel_source_unit: "btu",
        fuel_source_value: 2,
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
                <h4>Enter the Electricity Units to estimate</h4>
                <form onSubmit={handleSubmit}>
                    <input type="number" />
                    <button type="submit">Estimate</button>
                </form>
            </div>

            <Ecard/>
        </div>
    )
}

export default Fuel;