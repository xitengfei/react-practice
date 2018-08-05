import React, {Component} from 'react'

class Customer extends Component{
  // const match = this.props.match;
  render (){
  	console.log(this.props);
    return (
      <div>
        <h1>Customer: {this.props.match.params.type}</h1>
      </div>
    );
  }
}

export default Customer;