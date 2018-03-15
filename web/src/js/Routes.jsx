import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainItemsPage  from './components/mainItemsPage'
import navbar  from './components/navbar'
import ProduceUpload  from './components/produceUpload'



export const getRoutes = store => {
    
    return (
        <div>
        	<Route path ="*" component={navbar} />
            <Route exact path="/" component={MainItemsPage}/>
            <Route  path="/uploadCrop" component={ProduceUpload}/>

           
        </div>

    );
};
