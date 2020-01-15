import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  genBots = () => {
    let myBots = this.props.bots.filter((bot) => {
      return bot.enlisted
    })
    return myBots.map((bot) => {
      return <BotCard bot={bot} toggleEnlisted={this.props.toggleEnlisted}/>
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
