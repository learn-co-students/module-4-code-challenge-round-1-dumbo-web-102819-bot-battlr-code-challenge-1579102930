import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
	mapAllBots = () =>{
		return this.props.bots.map(bot => {
			return <BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick} />		
		})
	}


  render(){
	  
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		 
    		  
			   {this.mapAllBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
