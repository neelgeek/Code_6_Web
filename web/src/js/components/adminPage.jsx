import React from "react";
import {Component} from "react";
import { connect } from "react-redux";
import "../../css/LandingPage.css";
import {Pie} from "react-chartjs-2";

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
					          
				
					        <Pie data={{
						    labels: ["January", "February", "March", "April", "May", "June", "July"],
						    datasets: [
						        {
						            label: "My First dataset",
						            fill: false,
						            pointHoverRadius: 5,
						            pointRadius: 1,
						            pointHitRadius: 10,
						            data: [65, 59, 80, 81, 56, 55, 40],
						            spanGaps: false,
						        }
						    ]
						}}/>
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