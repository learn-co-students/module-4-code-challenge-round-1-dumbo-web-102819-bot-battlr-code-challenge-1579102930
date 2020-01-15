import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  //need to make a dynamic way of rendering each bot card

  
  render(){
	  console.log(this.props)
  	return (
  	  <div className="ui four column grid">
    		<BotCard bot={this.props.bot} />
    		  Collection of all bots
  	  </div>
  	);
  }

};

export default BotCollection;
