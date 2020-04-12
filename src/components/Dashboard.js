import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar';
import { Switch } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Slid from '../components/Slider';

class Dashboard extends React.Component{
    state = {
        slide: '',
        value: '',
        online: true,
        notifications: ''
    }

    handleSlid = (event, newValue) => {
        const [value, setValue] = React.useState();
        setValue(newValue);
        if (value > 80){
            this.setState({
                notification: 'Listening to music at a high volume could cause long-term hearing loss.'
            })
        }
    }

    switchChange = (event) => {
        this.setState({
            online: !this.state.online
          })
          console.log(this.state.online)
          if(this.state.online === false){
              this.setState({
                  notifications: 'Your application is offline. You won\'t be able to share or stream music to other devices.'
              })
          }
    }

    handleChange = (event, value) => {
        this.hval = value.props.value;
        // this.setState({
        //     notifications: 'Music quality is degraded. Increase quality if your connection allows it.'
        //   })
        console.log(this.hval)
          if(this.hval == 'Low'){
            this.setState({
              notifications: 'Music quality is degraded. Increase quality if your connection allows it.'
            })
        }
          console.log(this.state.value)
    }

    handleSlide = (e, value) => {
        this.val = value
        this.setState({
            value
          })
          console.log(this.state.value)
          if(this.val >= 80){
              this.setState({
                notifications: 'Listening to music at a high volume could cause long-term hearing loss.'
              })
          }
    }

        render(){
        return (
            <div>
                <Navbar />
                      <div style={{ marginTop: '80px' }}>
        <Grid container justify="center" p={100}>
            <div style={{ margin: '100px' }}>
                
            </div>
          <Grid item md={3} m={100} p={100}>
          <Card p={100}>
            <CardContent>
              <Typography>Hello</Typography>
              <Slider 
        step={10}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider"
        onChange={this.handleSlide}
        orientation="horizontal" 
        aria-label="Soundcheck" 
        color="primary" />
            </CardContent>
          </Card>
          </Grid>
          <Grid item md={3}>
              <Card>
                  <CardHeader>Online</CardHeader>
                  <CardContent>
                      <Typography>Online</Typography>
                      <Switch color='primary' onChange={this.switchChange} label="online"></Switch>
                  </CardContent>
              </Card>
          </Grid>
          <Grid>
          <InputLabel id="label">Quality</InputLabel>
<Select labelId="label" id="select" onChange={this.handleChange}>
  <MenuItem value="High">High</MenuItem>
  <MenuItem value="Medium">Medium</MenuItem>
  <MenuItem value="Low">Low</MenuItem>
</Select>
          </Grid>

        </Grid><br></br><br>
        </br>
           <p>{this.state.notifications}</p> 
            </div>
            

      </div>
        
        )
    }
}

export default Dashboard;