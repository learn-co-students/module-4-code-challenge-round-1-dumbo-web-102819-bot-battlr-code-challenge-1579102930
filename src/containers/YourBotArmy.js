import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  renderUsersBots() {
    // let newBots = this.props.bots.filter((item, index, self) => {
    //   index === self.findIndex((t) => t.name === item.name)
    // });
    // console.log(newBots)
    return this.props.bots.map(bot => <BotCard handleClick={this.props.handleClick} bot={bot} />)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderUsersBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
