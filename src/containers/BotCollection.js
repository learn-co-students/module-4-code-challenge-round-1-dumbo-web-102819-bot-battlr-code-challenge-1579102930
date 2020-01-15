import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  genBots = () => {
	return this.props.bots.map((bot, i) => {
		return <BotCard key={i} bot={bot} 
						toggleEnlisted={this.props.toggleEnlisted}/>
	})
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.genBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
