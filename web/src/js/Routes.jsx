import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import test  from './components/test'

export const getRoutes = store => {
    
    return (
        <div>
            <Route exact path="/" component={test}/>
           
        </div>

    );
};
