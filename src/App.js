import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SignUp from './SignUp';
import BelowHeader from './Below_Header';
import TodaysDeal from './TodaysDeal';
import Register from './Register';
import Sell from './Sell';
import CustomerService from './Customer_Service';
import GiftsCards from './Gifts_Cards';




function App() {
  return (

    <Router>

      <div className="App">
      <Switch>
          <Route path="/SignUp">
          <SignUp/>
          </Route>
        
          <Route path="/TodaysDeal">
            <Header/>
            <BelowHeader/>
            <TodaysDeal/>
            <Footer/>
          </Route>

          <Route path="/Register">
            <SignUp/>
            <Register/>
          </Route>

          <Route path="/Sell">
            <Header/>
            <BelowHeader/>
            <Sell/>
            <Footer/>
          </Route>

          <Route path="/Customer_Service">
            <Header/>
            <BelowHeader/>
            <CustomerService/>
            <Footer/>
          </Route>

          <Route path="/Gifts_Cards">
            <Header/>
            <BelowHeader/>     
            <GiftsCards/>
            <Footer/>
          </Route>

      
          <Route path ="/">
            <Header/>
            <BelowHeader/>
            <Home/>
            <Footer/>
          </Route>
      </Switch>
      </div>
    </Router>
      
        
      
  );
}

export default App;
