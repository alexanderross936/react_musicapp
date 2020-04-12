import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/ToolBar';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar';



class App extends React.Component{
  state = {
    loggedIn: false
  }
  render(){
    const isLoggedIn = this.state.loggedIn;
    let display;
    if (isLoggedIn){
     display = <Dashboard />
   } else {
     display = <Login />
    }
    return (
      <div>
      <Navbar />
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
      {display}
      </div>
        

  </div>
  
    );
  }
}

export default App;
