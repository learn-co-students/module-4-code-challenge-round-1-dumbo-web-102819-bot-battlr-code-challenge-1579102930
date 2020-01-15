import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'


class BotsPage extends React.Component {


  state = {
    botArray: [],
    workingBotArray: [],
    armyArray: []
  }

  
  // FETCH ALL BOTS
  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(resp => resp.json())
    .then(allBots => {
      this.setState({
        botArray: allBots,
        workingBotArray: allBots
      })
    })
  }


  // ADD BOT
  addBot = (bot) => {
    this.setState({
      armyArray: [...this.state.armyArray, bot]
    })
  }
  
  // REMOVE BOT
  removeBot = (bot) => {
    let filterArray = this.state.armyArray.filter(oneBot => oneBot.id !== bot.id)
    
    this.setState({
      armyArray: filterArray
    })
  }



  
  




  render() {

    return (
      <div>
        <YourBotArmy armyArray={this.state.armyArray} removeBot={this.removeBot} />
        <BotCollection botArray={this.state.workingBotArray} addBot={this.addBot} />
      </div>
    );
  }

}

export default BotsPage;
