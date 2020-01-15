import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
	createBots = () => {
		return this.props.bots.map((bot,index) => <BotCard key={index} bot={bot} handleClick={this.props.selectBot} />)
	}
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  
    		  {this.createBots()}
			
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
