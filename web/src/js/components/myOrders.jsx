import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import getOrderService from "../../ApiMiddleware/api/getOrderService";

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class myOrders extends Component{
	constructor(props){
		super(props);
		//'merchantProtected/myOrders'

		this.props.dispatch(getOrderService.getServiceApi("/merchantProtected/myOrders"));

	}
	render(){

		console.log(this.props.transaction )
		return(
			<div className="transaction-box container">
				<ul className="collection">
					{(this.props.transaction != {})? this.props.transaction.map((transaction)=>{

						return(
							<li className="collection-item">
			      		<div className="row">
				      		<div className="col s4">
				      			<div className="card">
							        <div className="card-content white-text">
							          <span classNam="card-title">Crop</span>
								          <table >
								          		<thead>
								          		</thead>
									          <tbody>
										          <tr>
										          	<th>Name</th>
										          	<td>Wheat</td>
										          </tr>
										        </tbody>
								          </table>


							         
							        </div>
							      
							      </div>
				      		</div>
				      		<div className="col s4">
				      			<div className="card">
							        <div className="card-content white-text">
							          <span classNam="card-title">Transaction</span>

							         
							        </div>
							      
							      </div>
				      		</div>
				      		<div className="col s4">
				      			<div className="card">
							        <div className="card-content white-text">
							          <span classNam="card-title">Transport</span>

							         
							        </div>
							      
							      </div>
				      		</div>
			      		</div>
			      </li>

							)

					}):(<div></div>)}
					




			      
			    
			    </ul>
			</div>
			)
	}
}

let select = (state) =>{
	return {

		transaction:state.TransactionReducer

	}
}

export default connect (select) (myOrders)