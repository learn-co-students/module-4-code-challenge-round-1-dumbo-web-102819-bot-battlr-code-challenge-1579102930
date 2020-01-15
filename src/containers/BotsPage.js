import React from "react";

import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: []
  }

  toggleEnlisted = (bot) => {
    let newBot = {...bot, enlisted: !bot.enlisted}
    let foundIndex = null
    this.state.bots.forEach((bot, i) => {
      if(bot.id == newBot.id){foundIndex = i}
    })
    let newBots = []
    if(foundIndex == 0){
      newBots = [newBot, ...this.state.bots.slice(1)]
    } else {
      newBots = [...this.state.bots.slice(0, foundIndex), newBot, ...this.state.bots.slice(foundIndex+1)]
    }
    this.setState({
      bots: newBots
    }, ()=>{console.log(this.state)})
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then((bots) => {
      let mappedBots = bots.map((bot) => {
        return {
          ...bot,
          enlisted: false
        }
      })
      this.setState({
        bots: mappedBots
      }, ()=>{console.log(this.state)})
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.bots}
                     toggleEnlisted={this.toggleEnlisted}/>
        <BotCollection bots={this.state.bots}
                       toggleEnlisted={this.toggleEnlisted}/>
      </div>
    );
  }

}

export default BotsPage;
