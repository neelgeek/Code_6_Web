import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import TransportTruckService from "../../../ApiMiddleware/api/transportTruckService";
import "../../../css/truckComponents.css";
import{ Link ,Redirect} from "react-router-dom";



class TransportTruckView extends Component{

	constructor(props){

		super(props);
		this.props.dispatch(TransportTruckService.getTransportServiceApi("/truckCompany/getTrucks/"));
		this.state={
			isToggled:true
		}

	}

	render(){
		console.log(this.props.truck);

		return(

			<div className="TransportTruckView">
					<div className="collection" id="myBox">

						<div className="row">

							<div className="collection" style={{"background":"#EFEBE9"}}>
								<div className="col s3">
									<i class="fas fa-truck"></i>
								</div>
								<div className="col s3">
									<li>{this.props.trucks}</li>
								</div>

								<div className="col s3" id="myCheck">

			
									        <div className="switch col s6">
											    <label>
											      Deactivated
											      <input type="checkbox"/>
											      <span className="lever"></span>
											      Activated
											    </label>
											</div>
									  

								</div>
							</div>


						</div>

					</div>
			</div>
		);
	}

}

let select=(state)=>{
	return{

		truck:state.transportTruckRequestReducer
	};
}

export default connect(select)(TransportTruckView);