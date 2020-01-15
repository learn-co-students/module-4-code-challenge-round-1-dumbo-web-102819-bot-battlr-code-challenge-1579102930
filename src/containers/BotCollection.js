import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here

  createBotDivs = () => {
    //console.log("Making Bots:", this.props.bots)

    return this.props.bots.map((bot, index) => {
      //console.log("bot: ", bot.bot_class)
      return <BotCard bot = {bot} key = {index} clickFunction={this.props.botShowStatOnClick}/>
    })
  }

  showStats = () => {
    //console.log("bot", this.state.tempBot)
    return <BotSpecs bot = {this.props.tempBot} 
            clickFunction={this.props.addToArmy} 
            backFunction={this.props.backOnClick}/>
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
          {this.props.showingStats ? this.showStats() : this.createBotDivs() }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
