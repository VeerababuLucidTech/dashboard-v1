import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function TanentsTable(props) {
  const [records, setRecords] = useState([]);
  const column = [
    {
      name: "ID",
      selector : row => row.id
    },
    {
      name: "Name",
      selector : row => row.name
    },
    {
      name: "Email",
      selector : row => row.email
    },
    {
      name: "City",
    },
  ];
  useEffect(() => {
    const getTanents = async () => {
      axios
        // .get("https://jsonplaceholder.typicode.com/users")
        .get("localhost:3000/Data.json")
        // .then((response) => console.log(response))
        .then((response) => setRecords(response.data))
        .catch((err) => console.log(err));
    };
    getTanents();
  }, []);

  return (
    <div>
      <h1>Tanents</h1>
      <DataTable 
      columns={column} 
      data={records}
      pagination
      >
      </DataTable>
    </div>
  );
}

export default TanentsTable;
