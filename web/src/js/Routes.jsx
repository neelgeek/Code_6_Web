import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainItemsPage  from './components/mainItemsPage'
import navbar  from './components/navbar';
import ProduceUpload  from './components/produceUpload';
import LandingPage  from './components/LandingPage';

import Login  from './components/authComponents/login';
import Signup  from './components/authComponents/Signup';
import singleProduce  from './components/singleProduce';
import Checkout  from './components/checkout';








export const getRoutes = store => {
    
    return (
        <div>
        	<Route path ="*" component={navbar} />
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/buyer" component={MainItemsPage}/>
            <Route exact path="/product/crop/:cropId/:quantity" component={singleProduce}/>
            <Route exact path="/product/crop/buy" component={Checkout}/>




            <Route  path="/uploadCrop" component={ProduceUpload}/>
            <Route  path="/Login/farmer" render={()=><Login isAuthenticated={store.getState().authReducer.loggedIn} role={"farmer"}/>}/>
            <Route  path="/Login/buyer" render={()=><Login isAuthenticated={store.getState().authReducer.loggedIn} role={"buyer"}/>}/>
            <Route  path="/Signup/farmer" render={()=><Signup isAuthenticated={store.getState().authReducer.loggedIn} role={"farmer"}/>}/>
            <Route  path="/Signup/buyer" render={()=><Signup isAuthenticated={store.getState().authReducer.loggedIn} role={"buyer"}/>}/>




            


           
        </div>

    );
};
