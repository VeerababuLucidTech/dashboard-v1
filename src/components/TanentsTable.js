import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function TanentsTable2(props) {
  const [records, setRecords] = useState([]);
  const [colunm, setColumn] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Data.json")
      .then((response) => response.json())
      .then((data) => {
        setColumn(Object.keys(data.users[0]));
        setRecords(data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="align-items-start">Tanents</h1>
      <div className="container table-responsive">
        <table className="table table-striped ">
          <thead>
            <tr>
              {colunm.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table-hover">
            {records.map((records, i) => (
              <tr key={i}>
                <td>{records.username}</td>
                <td>{records.roll}</td>
                <td>{records.email}</td>
                <td>{records.phone}</td>
                <td>{records.credited}</td>
                <td>{records.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TanentsTable2;
