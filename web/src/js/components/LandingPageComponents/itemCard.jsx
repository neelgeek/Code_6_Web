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

    render() {
      if(this.state.redirect)
        return <Redirect to={`/product/crop/${this.props.id}/${this.props.quantity}`}/>
      
        return(
        	
                <div className="col s6 m3">
                  <div className="card">
                    
                    <div className="card-content">
                      <p>crop Name : {this.props.crop}</p>
                      <p>crop type : {this.props.type}</p>
                      <p>crop Quantity : {this.props.quantity}</p>


                    </div>
                    <div className="card-action">
                      <button className="btn btn-waves" onClick={this.onViewCropButton}>view</button>
                  </div>
                </div>
            </div>

        )
    }

}

let select = (state) =>{

}

  
export default connect (select) (ItemCard);