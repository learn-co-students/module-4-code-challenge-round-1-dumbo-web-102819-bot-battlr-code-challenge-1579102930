import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  
	renderingBots= () => {
		return this.props.robots.map(robot => {
			return <BotCard bot={robot} handleClick={this.props.handleClick}/>
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {this.renderingBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
