import logo from './logo.svg';
import './App.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { Employees } from './Components/Employees';
import { Employee } from './Components/Employee';
import { AddForm } from './Components/AddForm';
import { EmployeeList } from './Components/EmployeeList';
import { useState } from 'react';

function App() {
  var title = "Employee Management"
  const onDelete = (employee) => {

    console.log("delete called...", employee)
    setEmployees(employeeList.filter((e) => {

      return e !== employee;
      //101 --> 102 <-- >103
    })
    )
  }
  const [employeeList, setEmployees] = useState([
    {
      eId: 101,
      eName: "Devesh",
      eAge: 20
    },
    {
      eId: 102,
      eName: "Abhishek",
      eAge: 20
    },
    {
      eId: 103,
      eName: "Dhagash",
      eAge: 21
    },
    {
      eId: 104,
      eName: "Aryan",
      eAge: 21
    }



  ])
  return (

    <>

      <Header title={title} searchBar={true} />
      {/* <Header title ="Employee Management" searchBar = {true}/> */}
      <div><br></br></div>
      <AddForm />

      {/* <Employees/> */}
      {/* <Employee/>  */}

      <EmployeeList employeeList={employeeList} onDelete={onDelete} />

      <Footer />

    </>
  );
}

export default App;
