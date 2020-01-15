import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here


state = {
	oneBot: []
}
  renderBotCard = () => {
	  return this.props.bots.map(bot => 
	  <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>)
  }

//   renderBotSpec =() => {
// 	  return this.props.currentBot.map(bot => <BotSpecs bot={bot} handleClick={this.props.handleClick}/>)
//   }
// renderBots = (bot) => {
// 	const filterBot = this.props.bots.filter(showBot => showBot.id === bot.id)

// 	if (filterBot) {
// 	this.props.currentBot.map(bot => <BotSpecs bot={bot} handleClick={this.props.handleClick}/>)

// 	} else {
// 		this.props.bots.map(bot => 
// 		<BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>)}
// }


	


	// botsPage = (bots) => {
	// 	this.setState({
	// 		oneBot: bots
	// 	})
	// }
	

	// filterBot = (bots) => {this.state.oneBot.filter(showBot => showBot.id === bots.id)}




  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">

			{this.renderBotCard()}

			{/* {this.renderBots()} */}


			{/* {this.filterBot() ? 
			this.props.currentBot.map(bot => <BotSpecs bot={bot} handleClick={this.props.handleClick}/>) 
			:
			this.props.bots.map(bot => 
			<BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>)}} */}


			{/* {this.filterBot() ? 
			this.props.currentBot.map(bot => <BotSpecs bot={bot} handleClick={this.props.handleClick}/>) 
			:
			this.state.bots.map(bot => 
			<BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>)} */}


    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
