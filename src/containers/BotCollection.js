import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotCard";

class BotCollection extends React.Component {

	expandBot= (bot) => {
		this.props.robots.map(robot => {
			return <BotSpecs bot={robot} renderingBots={this.renderingBots} handleClick={this.props.handleClick}/>

		})
	}
  
	renderingBots= () => {
		return this.props.robots.map(robot => {
			return <BotCard bot={robot} handleClick={this.props.handleClick} />
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {this.renderingBots()}
			  {this.expandBot()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
