import React from 'react';
import Header from './component/header/header.component';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createUserProfileDocument } from './firebase/fiebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shoppage/shoppage.component';
import CheckoutPage from './page/check-out/check-out.component';
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
    const { currentUser } =this.props;
    return (
      <div >
        <Header  />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route  path='/shop' element={<ShopPage />} />
          <Route  path='/checkout' element={<CheckoutPage />} />
          <Route  
          path='/signin' 
           element ={ currentUser ? 
            <Navigate  replace to='/' />
            : 
            <SignInAndSignUp />
            } 
            />
        </Routes> 
      </div>
    );
  }
 
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
 const mapDistchToProps = dispatch =>({
   setCurrentUser:user => dispatch(setCurrentUser(user))
 })
export default connect(mapStateToProps, mapDistchToProps)( App);
