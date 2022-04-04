import React from 'react';
import FormInput from '../form-inputs/form-input.component';
import { signInWithGoogle } from '../../firebase/fiebase.util';
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
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'', password:''})
    }
    handleChange= event => {
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
                    name='email'
                    type='email' 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='email'
                     required />
                    
                    <FormInput 
                    name='password'
                    type='password'
                    handleChange={this.handleChange}
                    value={this.state.password}
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