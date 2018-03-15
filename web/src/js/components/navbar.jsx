import React  from "react";
import {Link, withRouter} from 'react-router-dom'
import { connect } from "react-redux";


class navbar extends React.Component {
	constructor(props){
		super(props);
		this.state={
			login:false
		}
		
	}
	

    render() {
    	console.log(this.props.user)
    		let buyerNav =[];
    		let farmerNav =[{
		    			url:"/uploadCrop",
		    			link:"upload Crop"
		    		}]

    		let navs=[{
		    			url:"/Login/farmer",
		    			link:"login as Farmer"

		    		},{
		    			url:"/Login/buyer",
		    			link:"login as Buyer"

		    		},{
		    			url:"/Signup/farmer",
		    			link:"login as Farmer"

		    		},{
		    			url:"/Signup/buyer",
		    			link:"login as buyer"

		    		}]

       	
       	return(
       		<nav>
						    <div className="nav-wrapper">
						    	{this.props.user.loggedIn?
						    		(this.props.user.user.user.isFarmer?( 
						    			<ul id="nav-mobile" className="right hide-on-med-and-down">
						    				<li>
						    					<Link to="/uploadCrop">upload Crop</Link>
						    					<Link to="/logout">logout</Link>

						    				</li>
						    			 </ul>):
						    		(<ul id="nav-mobile" className="right hide-on-med-and-down">
						    					<Link to="/logout">logout</Link>
						    			
						    		 </ul>)
									):(
						      	 	<ul id="nav-mobile" className="right hide-on-med-and-down"> </ul>
						      	)}			         
						     
						    </div>
		 				</nav>
       		)
    }
}


let select = (state) => {
    return {
       
       user :state.authReducer
        
        
    };
  }
  
  export default withRouter(connect (select)(navbar));