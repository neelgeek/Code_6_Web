import React  from "react";
import {Component} from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";


class ItemCard extends Component {
   

    render() {
        return(
        	
                <div className="col s6 m3">
                  <div className="card">
                    
                    <div className="card-content">
                      <p>crop Name : {this.props.crop}</p>
                      <p>crop type : {this.props.type}</p>
                      <p>crop Quantity : {this.props.quantity}</p>


                    </div>
                    <div className="card-action">
                      <Link to="/">This is a link</Link>
                  </div>
                </div>
            </div>

        )
    }
}

  
  export default  ItemCard;