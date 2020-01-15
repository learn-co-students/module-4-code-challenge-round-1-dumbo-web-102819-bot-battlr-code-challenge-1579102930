import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  renderingYourArmy = () => {
    return this.props.yourArmy.map(robot => {
      return <div>
        <BotCard bot={robot} handleClick={this.props.handleClick}/>
      </div>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
        {this.renderingYourArmy()}
          <div className="row bot-army-row">
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
