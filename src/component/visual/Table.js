import React from "react";

const Table = ({dat}) => {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>electricity_valu</th>
                        <th>carbon_g</th>
                        <th>carbon_lb</th>
                        <th>carbon_kg</th>
                        <th>carbon_mt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dat.electricity_value}</td>
                        <td>{dat.carbon_g}</td>
                        <td>{dat.carbon_lb}</td>
                        <td>{dat.carbon_kg}</td>
                        <td>{dat.carbon_mt}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
