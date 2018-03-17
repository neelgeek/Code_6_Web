import React  from "react";
import {Component} from "react";
import {Link} from "react-router-dom"
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
   let data ={
    quantity:this.props.quantity
   }
   this.props.dispatch(produceService.post('/merchantProtected/product/'+this.props.id)).then((response)=>{

    if(response.data.type ="SuccessText"){
      this.setState({
        redirect:true
      })
    }
   })
  }

    render() {
      if(this.state.redirect)
        return <Redirect to={`/product/${this.props.id}`}/>
      
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