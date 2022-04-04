import React from 'react';
import Header from './component/header/header.component';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shoppage/shoppage.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { auth } from './firebase/fiebase.util';



class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser:user });

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div >
        <Header currentUser={ this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route  path='/shop' element={<ShopPage />} />
          <Route  path='/signin' element={<SignInAndSignUp />} />
        </Routes> 
      </div>
    );
  }
 
}

export default App;
