import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  createBotDivs = () => {
    //console.log("Making Bots in Army:", this.props.bots)
    return this.props.bots.map((bot, index) => {
      return <BotCard bot = {bot} key = {index} clickFunction={this.props.deleteFromArmy}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {this.createBotDivs()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
