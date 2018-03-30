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
		console.log(this.props.state)
		return()
	}
}

let select = (state) =>{
	return {

		transaction:state.TransactionReducer

	}
}

exports default connect (select) (myOrders)