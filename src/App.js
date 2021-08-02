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
import { MainRouting } from './Components/MainRouting';
import { Redirect, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import { Product } from './Pages/Product';
import { ProductDetails } from './Pages/ProductDetails';

function App() {
  return (

    <div>

      <MainRouting />
      <Route path="/">
        <Redirect to="/welcome"></Redirect>
      </Route>

      <div>

        <Route path="/welcome">
          <br />
          <div className="container">
            <Welcome />
            <br />
          </div>
          <Footer />
        </Route>

        <Route path="/product" >
          <Product />
        </Route>

        
        <Route path="/productdetails">
          <ProductDetails/>
        </Route>
{/* 
        <Route path="/product/:produamectId">
          <ProductDetails />
        </Route> */}

      </div>


    </div>

  )
}

export default App;
