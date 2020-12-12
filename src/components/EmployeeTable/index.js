import React from "react";
import "./style.css";


function EmployeeTable(props) {
  return (
      <tr key={props.id}>
        <td>{props.name}</td>
        <td onClick={() => props.filter(props.role)}>{props.role}</td>
        <td>{props.years_at_rooster_teeth}</td>
      </tr>
  );
}


export default EmployeeTable;
