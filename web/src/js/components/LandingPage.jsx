import React  from "react";
import {Component} from "react";
import { connect } from "react-redux";
import "../../css/LandingPage.css";
import{ Link ,Redirect} from "react-router-dom";
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Login  from './authComponents/login';


    
import "../../css/newLandingPage.css";





class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state={
            redirectToFarmer:false,
            redirectToBuyer:false
        }
    }
    onBuyerButton = (event) =>{

        this.setState({
            redirectToBuyer:true
        })
    }
    onFarmerButton = (event) =>{
        this.setState({
            redirectToFarmer:!this.state.redirectToFarmer   
        })
    }
    onBuyerButton = (event) =>{
        this.setState({
            redirectToBuyer:!this.state.redirectToBuyer  
        })
    }

    render() {
        const actionsForFarmer = [
              <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.onFarmerButton}
              />
              
            ];
             const actionsForBuyer = [
              <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.onBuyerButton}
              />
              
            ];
    
       
        return(
            // <div>
            //     <div className="row">
                 

            //     </div>


            //     <div className="LandingPage-login-box section row">
            //             <div className="col s6">
            //                 <p className="flow-text">
            //                     Welcome to Community of Farmers!!
            //                 </p>
            //             </div>
            //             <div className="col s6">
            //                     <div className="LandingPage-login-box">
                                    

            //                         <div className="row">
            //                             <div className="col offset-s2 s6 class-btn ">
            //                                 <button className="btn waves-light btn-large btn-farmer" onClick={this.onFarmerButton} >
            //                                     Login As Farmer
            //                                 </button>
            //                             </div>
            //                          </div>
            //                          <div className="row">
            //                             <div className="col offset-s2 s6 class-btn "  >
            //                                 <button className="btn waves-light btn-large btn-buyer" onClick={this.onBuyerButton} >
            //                                     Login As buyer
            //                                 </button>
            //                             </div>
            //                           </div>
                                        
                                        

                                      
            //                      </div>
            //                 </div>
            //           </div>
            // </div>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>

            <div >
               
                    <div className="row landing-page">
                    
                        
                       
                    </div>
                    <div className="row Halign-wrapper">
                        <div className="login-buttons center-align">
                            <RaisedButton onClick={(ev)=>this.setState({redirectToFarmer:true})} label="login as farmer" primary={true}/>
                            <RaisedButton onClick={(ev)=>this.setState({redirectToBuyer:true})}  label="login as Buyer" secondary={true}/>

                          </div>
                           <Dialog
                              title="Login for farmer"
                              actions={actionsForFarmer}
                              modal={false}
                              open={this.state.redirectToFarmer}
                              onRequestClose={this.handleClose}
                            >
                                <Login isAuthenticated={this.props.user.loggedIn} role={this.state.redirectToFarmer ?"farmer":""}/>

                            </Dialog>
                            <Dialog
                              title="Login for buyer"
                              actions={actionsForBuyer}
                              modal={false}
                              open={this.state.redirectToBuyer}
                              onRequestClose={this.handleClose}
                            >
                                <Login isAuthenticated={this.props.user.loggedIn} role={this.state.redirectToBuyer ?"buyer":""}/>

                            </Dialog>
                         

                    </div>
                

           
            </div>
            </MuiThemeProvider>

        )
    }
}


let select = (state) => {
    return {
       
        user:state.authReducer
        
    };
  }
  
  export default connect (select)(LandingPage);