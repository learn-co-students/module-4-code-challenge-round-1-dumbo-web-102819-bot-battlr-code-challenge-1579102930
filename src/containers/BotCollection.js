import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	  const botsInfo = this.props.allBots.map(bot => 
		<BotCard bot={bot} addToArmy={this.props.addToArmy}  />
		)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botsInfo}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
