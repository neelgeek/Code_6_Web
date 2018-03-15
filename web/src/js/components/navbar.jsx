import React  from "react";
import {Link, withRouter} from 'react-router-dom'
import { connect } from "react-redux";


class navbar extends React.Component {
   

    render() {
        return(
		<nav>
		    <div className="nav-wrapper">
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li><Link to="sass.html">Login as Farmer</Link></li>
		        <li><Link to="badges.html">Signup</Link></li>
		        <li><Link to="collapsible.html">Login as buyer</Link></li>
		         <li><Link to="collapsible.html">Truck portal</Link></li>
		         <li><Link to="/uploadCrop">upload crop</Link></li>

		      </ul>
		    </div>
		 </nav>

        )
    }
}


let select = (state) => {
    return {
       
        
        
    };
  }
  
  export default connect (select)(navbar);