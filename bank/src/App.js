import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import BankAuth from './contexts/BankAuth';
import BankPage from './pages/BankPage';
export default function App() {
  const [auth, setAuth] = useState(false);
  return (
    <BrowserRouter>
      <BankAuth.Provider value={{ auth, setAuth }}>
        <Navbar />
        <Routes />
      </BankAuth.Provider>
    </BrowserRouter >
  )
}

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <BankPage />
      </Route>
    </Switch >
  )
}