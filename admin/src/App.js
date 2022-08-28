import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import AdminPage from './pages/AdminPage';
import AdminApi from './contexts/AdminApi';
import ProtectedRoute from './Routes/ProtectedRoute';
import NavProps from './contexts/NavProps';
import AdminDashboard from './pages/AdminLogged/AdminDashboard';
import { useContext } from 'react';
import ProductDetails from './pages/ProductDetails';
export default function App() {
  const [isAdmin, setAdmin] = useState(false);
  const [nav, setNav] = useState("ADMIN");
  useEffect(() => {
    const val = Cookies.get('admin-access')
    if (val) {
      const date = new Date();
      const token = jwtDecode(val);
      if (token.exp * 1000 > date.getTime()) {
        setAdmin(true);
      }
      else {
        setAdmin(false)
      }
    }
    else {
      setAdmin(false)
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
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavProps.Provider value={{ nav, setNav }}>
          <AdminApi.Provider value={{ isAdmin, setAdmin }}>
            <Navbar />
            <Routes />
            <AdminReRoutes />
          </AdminApi.Provider>
        </NavProps.Provider>
      </ThemeProvider>
    </BrowserRouter >
  )
}

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <AdminPage />
      </Route>
      <Route exact path='/product/:id' component={ProductDetails} replace />
    </Switch >
  )
}
const AdminReRoutes = (props) => {
  const admin = useContext(AdminApi)
  return (
    <Switch>
      <Route exact path='/dashboard'>
        <ProtectedRoute isLoggedin={admin.isAdmin}>
          <AdminDashboard />
        </ProtectedRoute>
      </Route>
    </Switch>
  )
}