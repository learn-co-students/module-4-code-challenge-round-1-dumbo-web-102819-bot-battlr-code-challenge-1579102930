import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "./BotCollection"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: [],
    currentBot: {}
  }

  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(r => r.json())
    .then(allBots => 
      this.setState({
        bots: allBots,
        currentBot: allBots
      }))
  }

  addBot = (bot) => {
    this.setState({
      myBots: [...this.state.myBots, bot]
    })
  }

  removeBot = (bot) => {
    let filterBot = this.state.myBots.filter(removeBot => removeBot.id !== bot.id)
    this.setState({
      myBots: filterBot
    })
  }
  

  oneBot = () => {
    this.setState({
      currentBot: this.state.currentBot
    })
  }
  
  // showOneBot = (bot) => {
  //   if (this.state.currentBot.id === bot.id) {
  //   <BotSpecs bot={bot} />
  //   } else {
  //     null
  //   }
  // }
  
  

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} handleClick={this.removeBot}/>

        <BotCollection bots={this.state.bots} handleClick={this.addBot} currentBot={this.state.currentBot}/>
        
      </div>
    );
  }

}

export default BotsPage;
