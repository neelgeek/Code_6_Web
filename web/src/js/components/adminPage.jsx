import React from "react";
import {Component} from "react";
import { connect } from "react-redux";
import "../../css/LandingPage.css";
import {pie} from "react-chartjs";

class adminPage extends Component{
	constructor(props){
		super(props);


	}
	render(){
		return(
			<div className="adminPage container">
					<div className="row">
					    <div className="col s12 m6">
					      <div className="card">
					        <div className="card-content white-text">
					          
				
					        
					        </div>
					       
					      </div>
					    </div>
					  </div>
			</div>
			
			)
	}

}
let select = (state) =>{
	return {

	}
}

export default connect (select) (adminPage	)