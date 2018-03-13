import React  from "react";
import {Component} from "react";

import { connect } from "react-redux";


class test extends Component {
   

    render() {
        return(
        	<h1>everything working .. frontend is setup</h1>

        )
    }
}


let select = (state) => {
    return {
       
        
        
    };
  }
  
  export default connect (select)(test);