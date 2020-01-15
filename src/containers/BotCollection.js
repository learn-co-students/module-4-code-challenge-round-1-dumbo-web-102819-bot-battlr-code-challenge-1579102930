import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  mapAllBots = () => {
	// console.log(this.props.bots)
	return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} addBotToArmy={this.props.addBotToArmy} showBotSpec={this.props.showBotSpec} />)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}

			  {this.mapAllBots()}

  			</div>
  	  </div>
  	);
  }

};

export default BotCollection;
