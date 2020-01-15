import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.botList.map((bot) => <BotCard bot={bot} handleClick={this.props.showInfo} />)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
