import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  genBots = () => {
    return this.props.bots.map((bot, idx) => {
      return <div onClick={() => this.props.handleRemoveFromArmy(idx)}><BotCard bot={bot} /></div>
    })
  } 

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.genBots()} 
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
