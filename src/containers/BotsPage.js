import React from "react";

import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botToShow: null
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

  setBotToShow = (bot) => {
    this.setState({
      botToShow:bot
    })
  }

  removeBotToShow = () => {
    this.setState({
      botToShow: null
    })
  }

  getBotComponent = () => {
    if(this.state.botToShow){
      return <BotSpecs bot={this.state.botToShow}
                       toggleEnlisted={this.toggleEnlisted}
                       removeBotToShow={this.removeBotToShow}/>
    } else {
      return <BotCollection bots={this.state.bots}
                            toggleEnlisted={this.toggleEnlisted}
                            setBotToShow={this.setBotToShow}/>
    }
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
                     toggleEnlisted={this.toggleEnlisted}
                     setBotToShow={this.setBotToShow}/>
        {this.getBotComponent()}
      </div>
    );
  }

}

export default BotsPage;
