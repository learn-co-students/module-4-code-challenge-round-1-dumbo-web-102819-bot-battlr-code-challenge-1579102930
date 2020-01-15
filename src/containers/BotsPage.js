import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: []
  }

  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(r => r.json())
    .then(allBots => 
      this.setState({
        bots: allBots
      }))
  }

  addBot = (bot) => {
    this.setState({
      myBots: [...this.state.myBots, bot]
    })
  }
  

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} />

        <BotCollection bots={this.state.bots} handleClick={this.addBot}/>
        
      </div>
    );
  }

}

export default BotsPage;
