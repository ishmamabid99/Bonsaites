import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WishList from './pages/WishList';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Login from './pages/Login';
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
import AddProduct from './pages/AddProduct';

export default function App() {
  const [nav, setNav] = useState(false);
  const [isLoggedin, setLogin] = useState(false)
  const [org, setOrg] = useState(null)
  useEffect(() => {
    const val = Cookies.get('x-access')
    if (val) {
      const date = new Date();
      const token = jwtDecode(val)
      if (token.exp * 1000 > date.getTime()) {
        setOrg(token.user_role);
        setLogin(true);
      }
      else {
        setLogin(false)
      }
    }
    else {
      setLogin(false)
    }
  }, [])
  return (
    <BrowserRouter>
      <NavProps.Provider value={{ nav, setNav }}>
        <Navbar />
        <AuthApi.Provider value={{ isLoggedin, setLogin }}>
          <Routes org={org} />
        </AuthApi.Provider>
      </NavProps.Provider>
    </BrowserRouter>
  )
}

const Routes = (props) => {
  const auth = useContext(AuthApi);
  const nav = useContext(NavProps);
  console.log(auth)
  console.log(nav)
  return (
    <Switch>
      <Route exact path="/">
        <Home setNav={nav.setNav} org={props.org} />
      </Route>
      <Route exact path="/wishlist" >
        <Protected isLoggedin={auth.isLoggedin}>
          <WishList setNav={nav.setNav} />
        </Protected>
      </Route>
      <Route exact path="/add-product" >
        <AddProduct />
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
        <Route exact path='/login'><Login setNav={nav.setNav} /></Route>
        <Route exact path='/signup'><SignUp setNav={nav.setNav} /></Route>
        <Route exact path='/customer-signup'><CustomerSignup setNav={nav.setNav} /></Route>
        <Route exact path='/organization-signup'> <OrganizationSignup setNav={nav.setNav} /></Route>
      </ProtectedRoute>
    </Switch>
  )
}