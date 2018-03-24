import React from 'react'
import DropIn from 'braintree-web-drop-in-react';
import { connect } from "react-redux";

import checkoutService from "../../ApiMiddleware/api/checkoutService"


class Checkout extends React.Component{
	constructor(){
		super();
		this.state={
			authToken:"sandbox_qqwzck9p_ht7w76kny3r63525",
			instance: null
		}

	}
	buy = () =>{
		let main = this;
		this.state.instance.requestPaymentMethod((err,payload)=>{
				const nounce = payload.nonce

				if(err) alert(err);
				else{
					console.log(main.props.state.crop)
					let data ={
						farmerid:main.props.state.crop.farmerinfo.id,
						paymentMethodNonce:nounce,
						amount:main.props.state.crop.costInfo.total,
						origin:main.props.state.crop.transportInfo.origin,
						destination:main.props.state.crop.transportInfo.destination,
						orderId:main.props.order.order._id,
						truckId:main.props.state.crop.transportInfo.truckId
					}
					main.props.dispatch(checkoutService.postServiceApi(`/order/checkout`,data))
				}
			}
	   );
	}
	render(){

		return(
			<div>
					<DropIn
						options={{ authorization: this.state.authToken }}
						onInstance={instance => (this.setState({
							instance
						}))}
					/>
					<button onClick={this.buy.bind(this)}>Buy</button>
				</div>

			)

	}
}

let select = (state) =>{
	return {
		state: state.singleProduceReducer,
		truck:state.truckReducer,
		order:state.orderReducer,
		checkout:state.checkoutReducer

	}
}

  
  export default connect (select)(Checkout);
