import React  from "react";
import {Component} from "react";
import ItemCard from "./LandingPageComponents/itemCard"
import { connect } from "react-redux";
import produceService from "../../ApiMiddleware/api/produceService";
import "../../css/LandingPage.css";
import select from 'react-select';
               	


class MainItemsPage extends Component {
   
	constructor(props){
		super(props);


		this.state ={
			quantity:0,
			crop:"Rice",
			type:""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onQuantityChange = this.onQuantityChange.bind(this);
		 

	}
	componentDidMount(){
	 
     $('select').material_select();
              
	 }
	

	
	onQuantityChange(event){
		this.setState({
			quantity:event.target.value
		})
	}
	handleSubmit (event){
		event.preventDefault();
		
		let data = {
			crop:event.target.cropName.value,
			type:event.target.cropType.value,
			quantity:this.state.quantity
		}
		let { crop, type, quantity } = data
		console.log(crop,type,quantity)
		this.props.dispatch(produceService.getServiceApi(`/merchantProtected/search/?name=${crop}&type=${type}&quant=${quantity}`)).then(response =>console.log(response))

	}
	
	onCropNameChange = (ev) =>{
		let crop = ev.target.value

		this.setState({

			crop,

			
		})

		console.log(this.state)
	}
	
    render() {
    	let type=[];
    	let crops = [
    	{
    		cropType:"Rice",
    		subTypes:["Basmati","Brown Rice","Red Rice","Black Rice","Kolam"]

    	}
    	,{
    		cropType:"Maize",
    		subTypes:["baby-corn","sweet-corn","pop-corn","indian corn"]

    	},
    	{
    		cropType:"Wheat",
    		subTypes:["Hard Red Winter Wheat","White Wheat"]

    	}]
        return(
        	<div classNameName="mainPage">
        		<div className="nav-wrapper subnav-filters">
					  <div className="row">
					    <form className="col s12"  onSubmit={this.handleSubmit}>
					      <div className="row">
					        <div className="input-field col s3">
					          <select   name="cropName" id="cropName" onChange={this.onCropNameChange}>
					          <option value="">---</option>
					         {crops.map((crop,key)=>{
					         	return <option key={key} value={crop.cropType}>{crop.cropType}</option>
					         })}	
					 
					        </select>
					          <label>crop's name</label>
					        </div>
					        <div className="input-field col s3">
					         	<select name="cropType"  id="cropType">
									<option value="">---</option>
									{type.map((type,key)=>{
										return <option key={key} value={type}>{type}</option>
									})}
									
								</select>


					          <label>crop Type</label>
					        </div>
					        <div className="input-field col s3">
					          <input type="number" placeholder="quantity in (kg)" id="quantity" onInput={this.onQuantityChange}	/>
					          <label for="quantity">quantity</label>
					        </div>
					         <div className="input-field col s3">
					          <button type="submit" className="btn btn-waves">search</button>
					        </div>
					      </div>
					    </form>
					  </div>
					</div>
	        	<div className=" section no-pad-bot mainPage">
		        	 <div className="container">
			        	 <div className="row">
			        	 {this.props.state.items.map((item)=>{
			        	 	console.log("item are",item)
			        	 	return <ItemCard crop={item.crop} type={item.type} quantity={item.quantity} id={item._id}/>
			        	 })}
			        	 	

			        	 </div>
	        		</div>
        		</div>
        	</div>

        )
    }
}


let mapStateToProps = (state) => {
    return {
       state : state.itemReducer, 
    };
  }
  
  export default connect (mapStateToProps)(MainItemsPage);