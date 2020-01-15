import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  mapAllBots = () =>{
		return this.props.myBots.map(bot => {
			return <BotCard bot={bot} key={bot.id} handleClick={this.props.removeBot} />		
		})
	}

  render(){
    console.log(this.props.myBots)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
   
            {this.mapAllBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
