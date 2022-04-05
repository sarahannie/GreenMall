import React from 'react';
import Header from './component/header/header.component';
import { Routes, Route } from 'react-router-dom';
import { createUserProfileDocument } from './firebase/fiebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shoppage/shoppage.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { auth } from './firebase/fiebase.util';



class App extends React.Component{
 unsubscribeFromAuth = null;
  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef =  await createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        })
      }
      setCurrentUser(userAuth )
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div >
        <Header  />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route  path='/shop' element={<ShopPage />} />
          <Route  path='/signin' element={<SignInAndSignUp />} />
        </Routes> 
      </div>
    );
  }
 
}
 const mapDistchToProps = dispatch =>({
   setCurrentUser:user => dispatch(setCurrentUser(user))
 })
export default connect(null, mapDistchToProps)( App);
