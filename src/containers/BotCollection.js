import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
	createBotDiv = () => {
		return this.props.allBots.map((bot) => {
			return <div onClick={() => this.props.handleMoveToArmy(bot)}><BotCard handleMoveToArmy={this.props.handleMoveToArmy} bot={bot} /></div>
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.createBotDiv()} 
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
