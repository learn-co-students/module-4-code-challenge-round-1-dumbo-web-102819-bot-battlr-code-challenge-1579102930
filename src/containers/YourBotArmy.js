import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  //your bot army code here...

  mapAllbotsInYourArmy = () => {
    // console.log(this.props.army)
    return this.props.army.map(bot => <BotCard key={bot.id} bot={bot} removeBotFromArmy={this.props.removeBotFromArmy} />)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {this.mapAllbotsInYourArmy()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
