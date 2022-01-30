import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar  from "./components/navbar/Navbar";
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"

const Routes = () =>{
    return(
    <Router>
         <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="*" component={Home} />
         </Switch>
    </Router>
    )
}

export default Routes;

