import MaterialTable from "material-table";


export const Table = () => {
    const data = [
      { electricity_value: "", carbon_g: "", carbon_lb: "", carbon_kg: "", carbon_mt: "" },
      { electricity_value: "", carbon_g: "", carbon_lb: "", carbon_kg: "", carbon_mt: "" },
      { electricity_value: "", carbon_g: "", carbon_lb: "", carbon_kg: "", carbon_mt: "" },
      { electricity_value: "", carbon_g: "", carbon_lb: "", carbon_kg: "", carbon_mt: "" },
      { electricity_value: "", carbon_g: "", carbon_lb: "", carbon_kg: "", carbon_mt: "" },
      { electricity_value: "", carbon_g: "", carbon_lb: "", carbon_kg: "", carbon_mt: "" },
    ];
  };


  const columns = [
    {
      title: "Electricity_value",
      field: "electricity_value",
    },
    {
      title: "Carbon_g",
      field: "carbon_g",
    },
    {
      title: "Carbon_lb",
      field: "carbon_lb",
    },
    {
      title: "Carbon_kg",
      field: "carbon_kg",
    },
    {
      title: "Carbon_mt",
      field: "carbon_mt",
    }
  ];

  return (
    <MaterialTable title="Carbon Estimates" data={data} columns={columns} />
  );

  
