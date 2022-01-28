import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar  from "./components/common/Navbar";
import Home from "./components/home/Home"

const Routes = () =>{
    return(
    <Router>
        <Navbar/>
         <Switch>
            <Route exact path="/Home" component={Home} />
         </Switch>
    </Router>
    )
}

export default Routes;

