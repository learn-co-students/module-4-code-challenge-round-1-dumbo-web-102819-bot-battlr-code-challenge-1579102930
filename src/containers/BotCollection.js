import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here



  renderBotCard = () => {
	  return this.props.bots.map(bot => 
	  <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>)
  }

//   renderBotSpec =() => {
// 	  return this.props.currentBot.map(bot => <BotSpecs bot={bot} handleClick={this.props.handleClick}/>)
//   }
  




  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{this.renderBotCard()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
