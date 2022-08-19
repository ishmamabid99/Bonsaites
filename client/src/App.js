import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WishList from './pages/WishList';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

import NavProps from './components/NavProps';
import Home from './pages/Home';
import Protected from './components/Protected';
import Cookies from 'js-cookie';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './pages/SignUp';
import AuthApi from './contexts/AuthApi';
import jwtDecode from 'jwt-decode';
import CustomerSignup from './pages/CustomerSignup';
import OrganizationSignup from './pages/OrganizationSignup';
import MyProduct from './pages/MyProduct'
import ProgressBarContext from './components/ProgressBarContext';
import { CircularProgress, createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import ProductDetails from './pages/ProductDetails';
import Bank from './pages/Bank';
import BankApi from './contexts/BankApi';
import AdminPage from './pages/AdminPage';
import AdminDetails from './pages/ProductDetails';
const useStyles = makeStyles(theme => ({
  bar: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",
  }
}))
export default function App() {
  const [nav, setNav] = useState("LANDING");
  const [isLoggedin, setLogin] = useState(false)
  const [org, setOrg] = useState(null);
  const [modal, setModal] = useState(false);
  const [bar, setBar] = useState(false);
  const [bank, setBank] = useState(true)
  useEffect(() => {
    console.log(bar)
    const val = Cookies.get('x-access')
    if (val) {
      const date = new Date();
      const token = jwtDecode(val);
      console.log(token);
      if (token.exp * 1000 > date.getTime()) {
        setOrg(token.user_role);
        setNav(token.user_role);
        setLogin(true);
        setBank(token.user_bank)
      }
      else {
        setLogin(false)
      }
    }
    else {
      setLogin(false)
    }
  }, [])
  const theme = createTheme({
    palette: {
      primary: {
        main: green[50]
      },
      secondary: {
        main: green[900]
      }
    }
  })
  const classes = useStyles();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <BankApi.Provider value={{ bank, setBank }} >
          <AuthApi.Provider value={{ isLoggedin, setLogin }}>
            <ProgressBarContext.Provider value={{ bar, setBar }}>
              <NavProps.Provider value={{ nav, setNav }}>
                <Navbar />
                <Routes org={org} />
                <Route exact path='/admin' component={AdminPage} />
              </NavProps.Provider>
            </ProgressBarContext.Provider>
          </AuthApi.Provider>
        </BankApi.Provider>
      </ThemeProvider>
    </BrowserRouter >
  )
}

const Routes = (props) => {
  const auth = useContext(AuthApi);
  const nav = useContext(NavProps);
  return (
    <Switch>
      <Route exact path="/">
        <Home setNav={nav.setNav} org={props.org} />
      </Route>
      <Route exact path='/product/:id'>
        <ProductDetails />
      </Route>
      <Route exact path="/wishlist" >
        <Protected isLoggedin={auth.isLoggedin}>
          <WishList setNav={nav.setNav} />
        </Protected>
      </Route>
      <Route exact path="/my-product" >
        <MyProduct />
      </Route>
      <Route exact path="/cart" >
        <Protected isLoggedin={auth.isLoggedin}>
          <Cart setNav={nav.setNav} />
        </Protected>
      </Route>
      <Route exact path="/profile">
        <Protected isLoggedin={auth.isLoggedin} >
          <Profile setNav={nav.setNav} />
        </Protected>
      </Route>
      <ProtectedRoute isLoggedin={auth.isLoggedin}>
        <Route exact path='/signup'><SignUp setNav={nav.setNav} /></Route>
        <Route exact path='/customer-signup'><CustomerSignup setNav={nav.setNav} /></Route>
        <Route exact path='/organization-signup'> <OrganizationSignup setNav={nav.setNav} /></Route>
      </ProtectedRoute>
    </Switch>
  )
}