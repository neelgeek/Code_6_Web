import React from 'react'
import DropIn from 'braintree-web-drop-in-react';

export default class Checkout extends React.Component{
	constructor(){
		super();
		this.state={
			authToken:"sandbox_qqwzck9p_ht7w76kny3r63525",
			instance: null
		}

	}
	buy = () =>{
		let main = this;
		const { nonce } = this.state.instance.requestPaymentMethod((err,payload)=>{
			if(err) alert(err);
			else{
				let data ={
					paymentMethodNonce:payload.nounce,
					amount:main.props.state.crop.costInfo.total,
					origin:main.props.state.crop.transportInfo.origin,
					destination:main.props.state.crop.transportInfo.destination
				}
				this.props.dispatch()
			}
		});
		console.log(nonce)
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
		state: state.singleProduceReducer
	}
}