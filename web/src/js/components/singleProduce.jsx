import React  from "react";
import {Component} from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import singleProduceService from "../../ApiMiddleware/api/singleProduceService"
import orderProduceService from "../../ApiMiddleware/api/orderProduceService"




class singleProduce extends Component {
   	constructor(props){
   		super(props);
   		console.log(props.match)
   		console.log(singleProduce)
   		
   		this.props.dispatch(singleProduceService.postServiceApi(`/merchantProtected/product/${props.match.params.cropId}`,{quantity:this.props.match.params.quantity}))
   		.then(()=>{
   			let postData ={
   				location:this.props.state.crop.farmerinfo.district,
   				quantity:this.props.state.crop.productinfo.quantity
   		}
   		this.props.dispatch(singleProduceService.postServiceApiTruck(`/order/findTruck`,postData));
   		
   		})

   		
   		this.state={
   			farmerinfo:{
   				address:"null",
   				district:"null",

   			},
   			cropInfo:{},
   			productinfo:{},
   			redirectToPayment:false

   		}
   	}
   	redirectToPayment =(ev)=>{
   		
   	}
   	onBuyButtonClick = (ev) =>{
   		let productData = this.props.state.crop;
   		let truckId = this.props.truck.data._id
   		console.log(truckId)
   		productData.transportInfo.truckId = truckId;
   		console.log(productData)
   		this.props.dispatch(orderProduceService.postServiceApi(`/order/create`,productData))
   		
   	}
   	componentWillReceiveProps(nextProps,prevProps){
   		

   

   	}
  

    render() {
    	if(this.props.truck.noTruckFound){
    		alert("sorry we cannot assign any trucks to you right at this moment for this order")
    	}
    	if(this.state.redirectToPayment){
    		return <Redirect to="/product/crop/buy" />
    	}
    	

    	console.log(this.props)
    	let {farmerinfo ,costInfo,productinfo,transportInfo} = this.props.state.crop;
        return(<div className="section no-pad-bot singleProduce row">
        		<div className="col s5 m5">
        			<div className="row">
		        		<div className="farmerInfo section no-pad-bot">
		        			<div className="row">
		        				<div className="col">
		        					<h1>farmer Info</h1>
		        				</div>
		        			</div>
		        			
		        			<div className="row">
		        				<div className="col">
		        					<p>Address:   {farmerinfo && farmerinfo.address}</p>
		        				</div>
		        			</div>
		        			<div className="row">
		        				<div className="col">
		        					<p>mobile:{farmerinfo && farmerinfo.mobile}</p>
		        				</div>
		        			</div>
		        			
		        			
		        			
		        			

		        		</div>
	        		</div>
	        		<div className="row">
		        		<div className="farmerInfo section no-pad-bot">
		        			<div className="row">
		        				<div className="col">
		        					<h1>produce Info</h1>
		        				</div>
		        			</div>
		        			<div className="row">
		        				<div className="col">
		        					<p>crop Name:{productinfo && productinfo.name}</p>
		        				</div>
		        			</div>
		        			<div className="row">
		        				<div className="col">
		        					<p>crop type:{productinfo && productinfo.type}</p>
		        				</div>
		        			</div>
		        			<div className="row">
		        				<div className="col">
		        					<p>quantity:{productinfo && productinfo.quantity}</p>
		        				</div>
		        			</div>
		        			

		        		</div>
	        		</div>
        		</div>

        		<div className="col s6 m6">
        				<div className="farmerInfo section no-pad-bot">
        					<h1>price prediction</h1>
        					<p>crop cost: {costInfo && costInfo.crop}</p>
        					<p>transport cost: {costInfo && costInfo.transport}</p>
        					<p>total :{costInfo && costInfo.total}</p>

        					<div className=" row">
		        			<div className="col s6">
		        				<button className="btn btn-waves">share</button>
		        			</div>
		        			<div className="col s6">
		        				<Link to="/product/crop/buy"><button className="btn btn-waves" onClick={this.onBuyButtonClick} >buy</button></Link>
		        		</div>	
        				</div>
        					

        		</div> 	 
      	  			
        		</div>
        			

        		
        	</div>)
    }
}


let select = (state) => {
    return {
       	state:state.singleProduceReducer,
       	truck:state.singleTruckReducer,
        
        
    };
  }
  
  export default connect (select)(singleProduce);



