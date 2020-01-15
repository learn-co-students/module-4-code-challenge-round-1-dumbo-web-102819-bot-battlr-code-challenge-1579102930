import React from "react";
import BotCard from "../components/BotCard";
import uuid from 'uuid'

class YourBotArmy extends React.Component {
  renderBot = () => {
    return this.props.bots.map((bot, index) => {
      return <BotCard key={uuid()} bot={bot} handleClick={this.props.handleClick}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.renderBot()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
