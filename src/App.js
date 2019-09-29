import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import { Route , Switch } from 'react-router-dom'
import ShopPage from './pages/shop/Shop.component';


const Vinyl =()=>(

  <div>
    <h1>Hats Page</h1>
  </div>
)
  


function App() {
  return (
    <div className="App">
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
    </Switch>
   
     {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
