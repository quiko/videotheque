import React from 'react';
import Joi from 'joi-browser';
import Form from "../common/Form";


class RegistrationForm extends Form {
    state = {
        data:{
            username:"",
            name:"",
            password:""
        },
        err:{}
      }
      schema ={
          username : Joi.string().email().required().label('Username') ,
          name: Joi.string().required().label('Name')  ,
          password: Joi.string().min(8).required().label('Password') 
        }
    doSubmit=()=>{
        console.log('submitted');
    }
    render() { 
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit} className='form'>
                 {this.renderInput('name', 'Name')}
                 {this.renderInput('username','Username')}
                 {this.renderInput('password','Password','password')}
                 {this.renderButton('register')}
                </form>
            </div>
          );
    }
}
 
export default RegistrationForm;