import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import "../../css/LandingPage.css";
import{ Link ,Redirect} from "react-router-dom";




class LandingPage extends Component {
	constructor(props){
		super(props);
		this.state={
			redirectToFarmer:false,
			redirectToBuyer:false
		}
	}
	onBuyerButton = (event) =>{
		this.setState({
			redirectToBuyer:true
		})
	}
	onFarmerButton = (event) =>{
		this.setState({
			redirectToFarmer:true
		})
	}
	
    render() {
    	
    	if(this.state.redirectToFarmer){
    		return <Redirect to ="/Login/farmer"/>;
    	}
    	if(this.state.redirectToBuyer){
    		return <Redirect to ="/Login/buyer"/>;
    	}

        return(

        		<div className="LandingPage-login-box">
        			

		        	<div className="row">
					    <div className="col s6 class-btn">
					    	<button className="btn waves-light btn-large btn-farmer" onClick={this.onFarmerButton} >
					    		Login As Farmer
					    	</button>
					    </div>
					    <div className="col s6 class-btn">
					    	<button className="btn waves-light btn-large btn-buyer" onClick={this.onBuyerButton} >
					    		Login As buyer
					    	</button>
					    </div>
					  </div>
				 </div>
        	
        )
    }
}


let select = (state) => {
	console.log(state)
    return {
       
        user:state.authReducer
        
    };
  }
  
  export default connect (select)(LandingPage);
