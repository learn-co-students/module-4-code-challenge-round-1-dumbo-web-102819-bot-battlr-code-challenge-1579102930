import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    bots: [],
    yourArmy: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(botsArr => this.setState({ bots: botsArr}))
  }

  addBotToArmy=(BotObj) => {
    if(this.state.yourArmy.includes(BotObj)){
      alert('This bot is in your army already!')
    }else{
    this.setState({
      yourArmy: [...this.state.yourArmy, BotObj]
    })}
  }
  
  removeBotFromArmy=(BotObj) => {
    let newArry = [...this.state.yourArmy].filter((bot) => {
      return bot.id !== BotObj.id
    })
       this.setState({
         yourArmy: newArry
       })
  }

  render() {
    
    return (
      <div>
        <YourBotArmy bots={this.state.yourArmy} handleClick={this.removeBotFromArmy}/>
        <BotCollection bots={this.state.bots} handleClick={this.addBotToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
