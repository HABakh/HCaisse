
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/login.js';
import NavbarCaissier from './components/caissier/navbarCaissier';
import ProductList from './components/caissier/productList';
import BillPrint from './components/caissier/billPrint';
import NavbarGestionnaire from './components/gestionnaire/navbargetionnaire';
import UsersList from './components/gestionnaire/usersList';
// import Products from './components/gestionnaire/products';
// import Factures from './components/gestionnaire/factures';
import Commandes from './components/gestionnaire/commandes';
import ProductsList from './components/gestionnaire/productsList';
import CommandesList from './components/gestionnaire/commandesList';
import FacturesList from './components/gestionnaire/facturesList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/caissier/productList">
            <NavbarCaissier/>
            <ProductList/>
          </Route>
          <Route exact path="/caissier/billprint">
            <NavbarCaissier/>
            <BillPrint/>
          </Route>
          <Route exact path="/gestionnaire/Users">
            <NavbarGestionnaire/>
            <UsersList/>
          </Route>
          <Route exact path="/gestionnaire/commandes">
            <NavbarGestionnaire/>
            <CommandesList/>
          </Route>
          <Route exact path="/gestionnaire/products">
            <NavbarGestionnaire/>
            <ProductsList/>
          </Route>
          <Route exact path="/gestionnaire/factures">
            <NavbarGestionnaire/>
            <FacturesList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
