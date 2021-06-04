import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SignUp from './SignUp';
import Below_Header from './Below_Header';




function App() {
  return (

    <Router>

      <div className="App">
      <Switch>
        <Route path="/SignUp">
        <Header/>
       
        <Home/>
      
      
        <SignUp/>
        </Route>
        <Route path ="/">
          <Header/>
          <Below_Header/>
          <Home/>
          <Footer/>
        </Route>
      </Switch>
      </div>
    </Router>
      
        
      
  );
}

export default App;
