import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import "../../css/LandingPage.css";
import{ Link ,Redirect} from "react-router-dom";
import {Carousel} from 'react-responsive-carousel';



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
        	<div>
	        	<div className="row">
		         

	        	</div>


	        	<div className="LandingPage-login-box section row">
	        			<div className="col s6">
	        				<p className="flow-text">
	        					Welcome to Community of Farmers!!
	        				</p>
	        			</div>
	        			<div className="col s6">
				        		<div className="LandingPage-login-box">
				        			

						        	<div className="row">
									    <div className="col offset-s2 s6 class-btn ">
									    	<button className="btn waves-light btn-large btn-farmer" onClick={this.onFarmerButton} >
									    		Login As Farmer
									    	</button>
									    </div>
									 </div>
									 <div className="row">
									    <div className="col offset-s2 s6 class-btn "  >
									    	<button className="btn waves-light btn-large btn-buyer" onClick={this.onBuyerButton} >
									    		Login As buyer
									    	</button>
									    </div>
									  </div>
										
										

									  
								 </div>
							</div>
					  </div>
			</div>
        	
        )
    }
}


let select = (state) => {
    return {
       
        user:state.authReducer
        
    };
  }
  
  export default connect (select)(LandingPage);
