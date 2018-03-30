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
import FlatButton from 'material-ui/FlatButton';







class singleProduce extends Component {
   	constructor(props){
   		super(props);
   		console.log(props.match)
   		
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
     if(this.state.redirectToPayment){
       return <Redirect to="/product/crop/buy" />
   }
 
 
      console.log(this.props.state.crop)
      let {farmerinfo ,costInfo,productinfo,transportInfo} = this.props.state.crop;
         return(

          //<div className
          // <div className="section no-pad-bot singleProduce row">
          //   <div className="col s5 m5">
          //     <div className="row">
          //       <div className="farmerInfo section no-pad-bot">
          //         <div className="row">
          //           <div className="col">
          //             <h1>farmer Info</h1>
          //           </div>
          //         </div>
                  
          //         <div className="row">
          //           <div className="col">
          //             <p>Address:   {farmerinfo && farmerinfo.address}</p>
          //           </div>
          //         </div>
          //         <div className="row">
          //           <div className="col">
          //             <p>mobile:{farmerinfo && farmerinfo.mobile}</p>
          //           </div>
          //         </div>
                  
                  
                  
                  
 
          //       </div>
          //     </div>
          //     <div className="row">
          //       <div className="farmerInfo section no-pad-bot">
          //         <div className="row">
          //           <div className="col">
          //             <h1>produce Info</h1>
          //           </div>
          //         </div>
          //         <div className="row">
          //           <div className="col">
          //             <p>crop Name:{productinfo && productinfo.name}</p>
          //           </div>
          //         </div>
          //         <div className="row">
          //           <div className="col">
          //             <p>crop type:{productinfo && productinfo.type}</p>
          //           </div>
          //         </div>
          //         <div className="row">
          //           <div className="col">
          //             <p>quantity:{productinfo && productinfo.quantity}</p>
          //           </div>
          //         </div>
                  
 
          //       </div>
          //     </div>
          //   </div>
 
          //   <div className="col s6 m6">
          //       <div className="farmerInfo section no-pad-bot">
          //         <h1>price prediction</h1>
          //         <p>crop cost: {costInfo && costInfo.crop}</p>
          //         <p>transport cost: {costInfo && costInfo.transport}</p>
          //         <p>total :{costInfo && costInfo.total}</p>
 
          //         <div className=" row">
          //         <div className="col s6">
          //           <button className="btn btn-waves">share</button>
          //         </div>
          //         <div className="col s6">
          //         <Link to="/product/crop/buy"><button className="btn btn-waves" >buy</button></Link>
          //       </div>  
          //       </div>
                  
 
          //   </div>   
                
          //   </div>
              
 
            
          // </div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="singleProduce no-pad bot">
           <div className="row">
            <div className="col s6">
                      <button className="btn btn-waves" >Buy</button>
           
            
            
           


            </div>
             <ul className="col s6 collection">
              <li className="collection-item">
                  <div className="row">
                    
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>Crop :{productinfo && productinfo.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p> Type:{productinfo && productinfo.type}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>Quantity:{productinfo && productinfo.quantity}</p>
                    </div>
                  </div>
              </li>
              <li className="collection-item">
                  <div className="row">
                  <div className="farmerInfo section no-pad-bot">
                    <div className="row">
                     
                    </div>
                    
                    <div className="row">
                      <div className="col">
                        <p>Address:   {farmerinfo && farmerinfo.address}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>Mobile:{farmerinfo && farmerinfo.mobile}</p>
                      </div>
                    </div>
                    </div>
                  </div>
              </li>
              <li>
                <div className="farmerInfo section no-pad-bot">
                  <p>Base cost: {costInfo && costInfo.crop}</p>
                  <p>Transport cost: {costInfo && costInfo.transport}</p>
                  <p>total (Base Cost + Transport Cost) :{costInfo && costInfo.total}</p>
 
                  <div className=" row">
                 
                  <div className="col s6">
                  <Link to="/product/crop/buy"><button className="btn btn-waves" onClick={this.onBuyButtonClick}>buy</button></Link>
                </div>  
                </div>
                  
 
            </div>   

              </li>

            </ul>
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



