import React  from "react";
import {Component} from "react";
import {Link,Redirect} from "react-router-dom"
import { connect } from "react-redux";
import produceService from "../../../ApiMiddleware/api/produceService";



class ItemCard extends Component {
  constructor(props){
    super(props)

    this.state={
      redirect:false
    }
  }
  

  onViewCropButton = (event) =>{
  
   this.setState({
        redirect:true
      })
   
  }
  functionToReturnImage=(type)=>{
    if(type == "wheat")
        return <img src={require(`../../../images/wheat.jpg`)}/>
    else if (type == "Rice")
        return <img src ={require(`../../../images/rice.jpg`)}/>
      else
        return <img src ={require(`../../../images/wheat.jpg`)}/>
  }

    render() {

      if(this.state.redirect)
        return <Redirect to={`/product/crop/${this.props.id}/${this.props.quantity}`}/>
      
        return(
        	
                <div className="col s4">
                  <div className="card"  style={{"boxShadow":"3px 3px 30px  1px #888888"}}>
                  <div className="card-image">
                    
                     {this.functionToReturnImage(this.props.crop)}
                   

                    <span className="card-title" style={{"color":"white"}}>{this.props.crop}</span>
                  </div>
                    
                    <div className="card-content" style={{"background":"#FAFAFA","fontsFamily":"sansSerif"}}>
                      <p><b>Crop Name :</b> {this.props.crop}</p>
                      <p><b>Crop type :</b> {this.props.type}</p>
                      <p><b>Crop Quantity :</b> {this.props.quantity}</p>


                    </div>
                    <div className="card-action" style={{"background":"#EEEEEE","paddingLeft":"25%"}}>
                      <button className="btn btn-waves" onClick={this.onViewCropButton} style={{"background":"#00C853"}}>view</button>
                  </div>
                </div>
            </div>

        )
    }

}

let select = (state) =>{

}

  
export default connect (select) (ItemCard);