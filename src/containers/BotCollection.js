import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  genBots = () => {
	return this.props.bots.map((bot) => {
		return <BotCard bot={bot}/>
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
