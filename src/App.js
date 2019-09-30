import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import { Route , Switch } from 'react-router-dom'
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signInSignUp/signInSignUp.component';
import { auth } from './firebse/firebase.utils'

const Vinyl =()=>(

  <div>
    <h1>Hats Page</h1>
  </div>
)
  


class App extends React.Component{

  constructor(){
    super()
    this.state={
      currentUser: null
    }
  }

 unsubscribeFromAuth = null

  componentDidMount() {
    //AFTER WE RUNNING APP AND COMPONENT IS MOUNTED -  CONNECTION W FIREBASE THROUGH AUTH IS PERMANENTLY OPEN - WE CAN GET AUTH.USER INFORMATION
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signIn' component={SignInAndSignUp} />
        </Switch>


        {/* <HomePage></HomePage> */}
      </div>
    );
  }
  
}

export default App;
