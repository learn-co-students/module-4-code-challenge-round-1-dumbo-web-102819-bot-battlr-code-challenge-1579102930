import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  createArmy = () => {
    return this.props.army.map((bot,index) => <BotCard key={index} bot={bot} handleClick={this.props.discharge} />)
  }
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.createArmy()}
            
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
