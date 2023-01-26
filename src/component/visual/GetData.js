import React, {useEffect, useState} from "react";
import Chart from "./Chart";
import Table from "./Table";

const GetData = () => {
    
    const [carbonData, setCarbonData] = useState([])
    
    useEffect(() => {
        fetch('https://carbo-data-ntwigamartin.vercel.app/data')
        .then(response => response.json())
        .then(data => {setCarbonData(data.electricity)})
    }, [])
    
    console.log(carbonData);
    let dataArray = carbonData

    return (
        <div>
            {dataArray.map(item=> <Table key={item.id} dat={item}/>)}
            <Chart data={carbonData.electricity}/>
        </div>
    )
}

export default GetData;