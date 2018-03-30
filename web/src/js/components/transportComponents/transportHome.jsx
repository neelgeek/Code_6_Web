import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import TransportAuthService from "../../../ApiMiddleware/api/transportAuthService";
import TransportTruckView from "./transportTruckView";
import{ Link ,Redirect} from "react-router-dom";





class TransportHome extends Component{

	constructor(props){

		super(props)
		this.onClickAdd=this.onClickAdd.bind(this);
		this.onClickView=this.onClickView.bind(this);
		this.state={
			clicked:false,
			type:"",
			isHidden:true
		};
		


	}

	onClickAdd(event){
		event.preventDefault();
		console.log(this.props.trans_state.loggedIn)

		this.setState(

				{

					clicked:true,
					type:"ADD",
					isHidden:true
				}
		)
	}


	onClickView(event){

		event.preventDefault();
		this.setState(

			{

				clicked:true,
				type:"VIEW",
				isHidden:false
			}
		);
	}

	render(){

		if(this.state.clicked && this.state.type=="ADD"){
			return (<Redirect to ="/transport/add"/>)
		}

		return(

			<div className="TransportHome">
				
					<div className="row">
						<div className="input-field col s6">
							<button type="button" onClick={this.onClickAdd} className="btn btn-waves" >Add Truck</button>
						</div>
					</div>


					<div className="row">
						<div className="input-field col s6">
							<button type="button" onClick={this.onClickView} className="btn btn-waves" >View Trucks</button>
						</div>
					</div>


					{ !this.state.isHidden && <TransportTruckView/>}


						

			</div>

		)
	}
}

let select=(state)=>{
	return {

		trans_state:state.transportAuthReducer
	};
}

export default connect(select)(TransportHome);