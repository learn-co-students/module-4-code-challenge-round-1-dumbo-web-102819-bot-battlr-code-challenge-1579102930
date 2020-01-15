import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


	renderBotCard = () => {
		return	this.props.botArray.map((bot) => {
		return <BotCard 
					bot={bot}
					handleClick={this.props.addBot}
					isClicked={this.props.isClicked}
					armyArray={this.props.armyArray}
			   />
		})
	}
	

	


  

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
			  {this.renderBotCard()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
