import React from "react";
import BotsPage from "../containers/BotsPage"
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {



render(){
	
console.log(this.props)


const renderBot = this.props.allBots.map(bot => {
	return <BotCard bot={bot} allBots={this.props.allBots} yourBots={this.props.yourBots}/> })


  
	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {renderBot}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
