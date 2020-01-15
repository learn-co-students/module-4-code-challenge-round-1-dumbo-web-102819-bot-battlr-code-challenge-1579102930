import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	//   console.log(this.props.bot.name)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
			  {/* {this.props.botsMapped.name} */}
    		  Collection of all bots
			  <BotCard bot={this.props.bot}/>
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
