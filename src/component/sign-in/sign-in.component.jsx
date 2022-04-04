import React from 'react';
import FormInput from '../form-inputs/form-input.component';
import {  auth, signInWithGoogle } from '../../firebase/fiebase.util';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss'

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit =  async event =>{
        event.preventDefault();

        const { email, password }= this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'', password:''})
        }catch(error){
            console.log(error)
        }
    }

    handlechange= event => {
        const{value, name } = event.target;
        this.setState({ [name]:value })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={ this.handleSubmit}>
                    <FormInput
                    type='email' 
                    name='email' 
                    value={this.state.email}
                    onChange={this.handlechange}
                    label='email'
                     required />
                    
                    <FormInput
                    type='password' 
                    name='password'
                    value={this.state.password}
                    onChange={this.handlechange}
                    label='password'
                    required />

                    <div className='buttons'>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton  onClick = {signInWithGoogle} isGooglSignIn> Google Sign In
                    </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}
 
export default SignIn;