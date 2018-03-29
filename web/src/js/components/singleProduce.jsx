  import React  from "react";
import {Component} from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import singleProduceService from "../../ApiMiddleware/api/singleProduceService"
import orderProduceService from "../../ApiMiddleware/api/orderProduceService";
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';





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
      console.log(postData)
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
   
   	onBuyButtonClick = (ev) =>{
   		let productData = this.props.state.crop;
   		let truckId = this.props.truck.data._id
   		console.log(truckId)
   		productData.transportInfo.truckId = truckId;
   		console.log(productData)
   		this.props.dispatch(orderProduceService.postServiceApi(`/order/create`,productData))
   		
   	}
   	
  

    render() {
      console.log(this.props)
      let error = true
    	if(this.props.truck.noTruckFound && this.props.state.crop){
        error = false
    		alert("sorry we cannot assign any trucks to you right at this moment for this order")
    	}
    	if(this.state.redirectToPayment){

    		return <Redirect to="/product/crop/buy" />
    	}
    	

    	console.log(this.props)
    	let {farmerinfo ,costInfo,productinfo,transportInfo} = this.props.state.crop;
        return(
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
		 <div className="singleProduce">
		 	<div className="container">
			 	<div className="row">
					<Card>
						<CardText>
								<ul>
								 	<li></li>
									 <li></li>


								</ul>


						</CardText>

					</Card>

				 </div>

			 </div>

		 </div>
		 </MuiThemeProvider>
		)
    }
}


let select = (state) => {
    return {
       	state:state.singleProduceReducer,
       	truck:state.singleTruckReducer,
        
        
    };
  }
  
  export default connect (select)(singleProduce);



