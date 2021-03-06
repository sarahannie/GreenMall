import React from "react";
import FormInput from "../form-inputs/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/fiebase.util";
import CustomButton from "../custom-button/custom-button.component";
import './sign-up.style.scss'

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit =async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("pasword does not match");
            return;  
        }
        try{
            const {user} =  await auth.createUserWithEmailAndPassword(
                email, 
                password)
                await createUserProfileDocument(user, {displayName});

                this.setState({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                })
        } catch (error) {
            console.error(error);
        }
    }

    handlechange = event =>{
        const {name, value} = event.target;
        this.setState({[name]:value});
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handlechange}
                    label='Display Name'
                    required
                     />
                     <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handlechange}
                    label='Email'
                    required
                     />
                      <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handlechange}
                    label='Password'
                    required
                     />
                    
                     <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handlechange}
                    label='Confirm password'
                    required
                     />
                     <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp; 