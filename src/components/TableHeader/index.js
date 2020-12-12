import React from "react";
import "./style.css";

function TableHeader(props) {
  return (
      <tr className = 'tableheading'>
        <td><button type="button" onClick={() => props.sortByHeading('name')}>Name</button></td>
        <td><button type="button" onClick={() => props.sortByHeading('role')}>Role</button></td>
        <td><button type="button" onClick={() => props.sortByHeading('Years_at_rooster_teeth')}>Years At Rooster Teeth</button></td>
      </tr> 
  );
}

export default TableHeader;
