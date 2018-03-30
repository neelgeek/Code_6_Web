import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import "../../css/LandingPage.css"
import produceService from "../../ApiMiddleware/api/produceService";



class ProduceUpload extends Component {
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event){
		event.preventDefault();
		console.log(event.target.cropName)
		let {cropName , quantity, price} = event.target;

		if(cropName.value == undefined || quantity.value == undefined || price.value == undefined ){

			alert("fill all fields");
			throw new Error("some fields Empty")
		}
		let data = {
			crop:cropName.value,
			type:null,
			quantity:quantity.value,
			price:price.value
		}
		this.props.dispatch(produceService.postServiceApi('/farmerProtected/produce',data)).then(response=>console.log(response))
		this.setState({
			crop:undefined

		})
	}
   

    render() {
    	let crops = {
    	
    		"Rice":
    		["Basmati","Brown Rice","Red Rice","Black Rice","Kolam"]

    	
    	,"Maize":
    		["baby-corn","sweet-corn","pop-corn","indian corn"]

    	,
    	
    		"Wheat":
    		["Hard Red","Winter Wheat","White Wheat"]

    	}
    	let cropTypes= Object.keys(crops);


        return(

        		<div className="login-box ">
        			<h1 className="center-align">upload crops</h1>

		        	<div className="row">
					    <form className="form-horizantal" onSubmit={this.onSubmit}>
					      <div className="form-group">
					        <div className="input-field col s6">
					         <DropDownMenu
					 		           floatingLabelText="crop name"
					 		           value={this.state.crop}
					 		           onChange={this.onCropNameChange}
					 		           style={{
					 		           	"width":"100%"
					 		           }}
					 		           

					 		         	>
					 		           {cropTypes.map((crop,key)=> <MenuItem key={key} 
					 		 								          	value={crop} 
					 		 								          	primaryText={crop}
					 		 								          	/>
					 		 								          	)}
					 		        </DropDownMenu>
					        </div>
					       </div>
					       
					     
					      <div className="form-group">
					        <div class="input-field col s12">
								//crop types

							  </div>
					      </div>
					      
					      <div className="form-group">
					        <div className="input-field col s12">
					          <input id="quantity" type="number" name="quantity" className="validate"/>
					          <label for="quantity">weight in (kg)</label>
					        </div>
					      </div>
					      <div className="form-group">
					        <div className="input-field col s12">
					          <input id="price" type="number" name="price" className="validate"/>
					          <label for="price">Price in (Rs)</label>
					        </div>
					      </div>
					     
					       <div className="form-group">
					        <div className="input-field col s12">
					        	<button type="submit" className="btn waves-effect waves-light">submit</button>
				            </div>
					      </div>
					      
					    </form>
					  </div>
				 </div>
        	
        )
    }
}


let select = (state) => {
    return {
       
        
        
    };
  }
  
  export default connect (select)(ProduceUpload);
