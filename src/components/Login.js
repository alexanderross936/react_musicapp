import React from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
class Login extends React.Component{

    state = {
        username: '',
        password: ''
      }

    // handleChange = (event) => {
    //     let nam = event.target.name;
    //     let val = event.target.value;
    //     this.setState({[nam]: val})
    //   }

    //   handleSubmit = () =>{
    //     e.PreventDefault()

    //   }

render(){
    return (
        <Card>
            <CardContent>
            <FormControl onSubmit={this.handleSubmit}>
        <Input type='text' onChange={this.handleChange} name='username' />
        <Input type='password' onChange={this.handleChange} name='password' />
       <Button><Input type="submit" value="Submit" /></Button>
        </FormControl>
            </CardContent>

        </Card>


    )
}


}

export default Login;