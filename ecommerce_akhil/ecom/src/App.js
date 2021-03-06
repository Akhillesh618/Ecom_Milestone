import React,{useEffect} from "react"
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";


function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(() => {  //listener for user. it holds the user detals
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS ====>',authUser);

      if(authUser) {
        //User Logged in firing to data layer, to know who is logged in 
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //user logout
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])

  return (
    

    <Router>
      <div className="App">

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
