import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import "../../../css/LandingPage.css";
import authService from "../../../ApiMiddleware/api/authService";
import{ Link ,Redirect} from "react-router-dom";




class Login extends Component {
	constructor(props){
		super(props);
		console.log(props)
		this.onSubmit = this.onSubmit.bind(this);
		this.state={
			redirect:false
		}
	}

	onSubmit(event){
		event.preventDefault();
		if((event.target.phoneNumber.value !="") && (event.target.password.value !="")){

			let data ={
				mobile : event.target.phoneNumber.value,
				isFarmer:(this.props.role == "farmer"?true:false),
				password: event.target.password.value
			}
			this.props.dispatch(authService.postServiceApi('/signin',data)).then(response =>{
				console.log(response)
				if(response.type == "Success")
				this.setState({
					redirect:true
				})
				else{
					alert("email or password is incorrect")
				}
			})
			.catch(err =>{
				alert(err.message)
			})
		}
		else{
			alert('fill all credentails')
		}
	}
   

    render() {
    	if(this.state.redirect || this.props.isAuthenticated){
    		if(this.props.role == "farmer")
    		return <Redirect to ="/farmer"/>;
    		else
    			return <Redirect to = "/buyer"/>
    	}

        return(

        		<div className="login-box ">
        			<h1 className="center-align">{this.props.role} Login</h1>

		        	<div className="row">
					    <form className="form-horizantal" onSubmit={this.onSubmit}>
					      
					        <div className="input-field col s6 ">
					          <input  id="adhar_number" type="text" name="phoneNumber" className="validate"/>
					          <label for="adhar_number">phone number</label>
					        </div>
					       
					       
					     
					      <div className="input-field col s6 ">
					        <input  id="password" type="password" name="password" className="validate"/>
					          <label for="password">password</label>
					      </div>
					      <div className="row">
						      <div className="input-field col s6">
						        <button type="submit" className="btn btn-waves" >Login</button>
						      </div>
					      </div>
					      <div className="row">
						      <div className="input-field col s6 offset-s3">
						        <p>not a member?{this.props.role === "farmer"?<Link to="/signup/farmer">Register as farmer</Link>:<Link to='/signup/buyer'>Register as buyer</Link>}</p>

						      </div>
					      </div>

					      
					    </form>
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
  
  export default connect (select)(Login);
