import React  from "react";
import {Component} from "react";
import ItemCard from "./LandingPageComponents/itemCard"
import { connect } from "react-redux";
import produceService from "../../ApiMiddleware/api/produceService";
import "../../css/LandingPage.css";





class MainItemsPage extends Component {
   
	constructor(props){
		super(props);


		this.state ={
			quantity:0,
			crop:"",
			type:""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onQuantityChange = this.onQuantityChange.bind(this);
		 $(document).ready(function() {
                    $('select').material_select();
                });

	}
	
	

	
	onQuantityChange(event){
		this.setState({
			quantity:event.target.value
		})
	}
	handleSubmit (event){
		event.preventDefault();
		this.setState({
			crop :$("#cropName").val(),
			type:$("#type").val(),
		}) 	
		let {crop ,type,quantity} = this.state
		console.log(crop,type,quantity)
		this.props.dispatch(produceService.getServiceApi(`/merchantProtected/search/?name=${crop}&type=${type}&quant=${quantity}`)).then(response =>console.log(response))

	}
	
    render() {
    	let crops =["gehu","wheat","jawhar","bajra","corn"];
    	let types=["jawhar","wheat","kolam","basmati"];
        return(
        	<div classNameName="mainPage">
        		<div className="nav-wrapper subnav-filters">
					  <div className="row">
					    <form className="col s12"  onSubmit={this.handleSubmit}>
					      <div className="row">
					        <div className="input-field col s3">
					          <select  onChange={this.onCropNameChange} id="cropName" >
					         {crops.map((crop,key)=>{
					         	return <option key={key} value={crop}>{crop}</option>
					         })}
					        </select>
					          <label>crop name</label>
					        </div>
					        <div className="input-field col s3">
					          <select onChange={this.onCropTypeChange} id="type">
					         	 {types.map((type,key)=>{
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


let select = (state) => {
    return {
       state : state.itemReducer, 
    };
  }
  
  export default connect (select)(MainItemsPage);