import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one

  
 //functions
  

  render() {
    // console.log(this.props.bots)
    //const
    const botsMapped = this.props.bots.map(bot => {
      return (
      <BotCollection 
        bot= {bot} 
        key= {bot.id}
      />)
    });

    return (
      <div>
        {/* <BotCollection {botsMapped} /> */}
        {/* put your components here */}
        {botsMapped}
      </div>
    );
  }

}

export default BotsPage;

