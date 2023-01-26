import MaterialTable from "material-table";


export const Table = () => {
    const data = [
      { country: "", grams: "", kgs: "", pounds: "" },
      { country: "", grams: "", kgs: "", pounds: "" },
      { country: "", grams: "", kgs: "", pounds: "" },
      { country: "", grams: "", kgs: "", pounds: "" },
      { country: "", grams: "", kgs: "", pounds: "" },
      { country: "", grams: "", kgs: "", pounds: "" },
    ];
  };


  const columns = [
    {
      title: "Country",
      field: "country",
    },
    {
      title: "Grams",
      field: "grams",
    },
    {
      title: "Kgs",
      field: "kgs",
    },
    {
      title: "Pounds",
      field: "pounds",
    },
  ];

  