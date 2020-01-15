import React from "react";
import BotCard from "../components/BotCard";
import uuid from 'uuid'

class BotCollection extends React.Component {
  
renderBot = () => {
	return this.props.bots.map((bot, index) => {
		return <BotCard key={uuid()} bot={bot}/>
	})
}
  render(){
	  
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBot()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
