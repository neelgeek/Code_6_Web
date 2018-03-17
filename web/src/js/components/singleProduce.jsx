import React  from "react";
import {Component} from "react";

import { connect } from "react-redux";


class singleProduce extends Component {
   

    render() {
        return(<div className="section no-pad-bot singleProduce row">
        		<div className="col s5 m5">
        			<div className="row">
		        		<div className="farmerInfo section no-pad-bot">
		        			<div className="row">
		        				<div className="col">
		        					<h1>farmer Info</h1>
		        				</div>
		        			</div>
		        			<div className="row">
		        				<div className="col">
		        					<p>Name:jasdkfj</p>
		        				</div>
		        			</div>
		        			<div className="row">
		        				<div className="col">
		        					<p>Address:jfkja,fjaskdjf,kjfajdfk</p>
		        				</div>
		        			</div>
		        			<div className="row">
		        				<div className="col">
		        					<p>district:kasjdfkjaskfjd</p>
		        				</div>
		        			</div>
		        			<div className="row">
		        				<div className="col">
		        					<p>state:kasjdfkjaskfjd</p>
		        				</div>
		        			</div>
		        			
		        			
		        			

		        		</div>
	        		</div>
	        		<div className="row">
		        		<div className="farmerInfo section no-pad-bot">
		        			<div className="row">
		        				<div className="col">
		        					<h1>produce Info</h1>
		        				</div>
		        			</div>
		        			<div className="row">
		        				<div className="col">
		        					<p>crop Name:jasdkfj</p>
		        				</div>
		        			</div>
		        			<div className="row">
		        				<div className="col">
		        					<p>crop type:jfkja,fjaskdjf,kjfajdfk</p>
		        				</div>
		        			</div>
		        			<div className="row">
		        				<div className="col">
		        					<p>quantity:kasjdfkjaskfjd</p>
		        				</div>
		        			</div>
		        			

		        		</div>
	        		</div>
        		</div>
        		<div className="col s6 m6">
        				<div className="farmerInfo section no-pad-bot">
        					<h1>price prediction</h1>
        				</div>
      	  			
        		</div>
        		<div className="row">
        			<div className="col s6">
        			<button className="btn btn-waves">share</button>
        			</div>
        			<div className="col s6">
        			<button className="btn btn-waves">share</button>
        			</div>		

        		</div>
        	</div>)
    }
}


let select = (state) => {
    return {
       
        
        
    };
  }
  
  export default connect (select)(singleProduce);



