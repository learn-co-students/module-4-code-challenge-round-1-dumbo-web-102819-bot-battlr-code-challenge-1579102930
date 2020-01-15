import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBotsList() {
	return this.props.bots.map(bot => <BotCard removeBot={this.props.removeBot} handleClick={this.props.handleClick} bot={bot} />)
  }

  render(){
	
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{this.renderBotsList()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
