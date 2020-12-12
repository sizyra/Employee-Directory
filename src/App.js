import React, { Component } from "react";
import TableHeader from "./components/TableHeader"
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from './components/employees.json';
import './index.css';

class App extends Component {
  state = {
    employees
  };

  sortByHeading = heading => {
    if(isNaN(employees[0][heading])){
      let employeeSorted = employees.sort((a,b) => {
        if(a[heading] < b[heading]) { return -1; }
        if(a[heading] > b[heading]) { return 1; }
        return 0;
      });
      this.setState({ employeeSorted });      
    }else{
      let employeeSorted = employees.sort((a, b) => {
        return b[heading] - a[heading]; 
      });
      this.setState({ employees:  employeeSorted });
    }
  }

  filter = filter => {
      let employeeFiltered = employees.filter(employee => employee.role === filter);
      this.setState({ employees: employeeFiltered });
  }


  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <table><tbody>
          <TableHeader
            sortByHeading={this.sortByHeading}
          />
          
          {this.state.employees.map(employee => (
              <EmployeeTable
                id={employee.id}
                name={employee.name}
                role={employee.role}
                days_in_space={employee.days_in_space}
                final_mission={employee.final_mission}
                filter={this.filter}
              />
            ))}
        </tbody></table>
      </Wrapper>
    );
  }
}

export default App;
