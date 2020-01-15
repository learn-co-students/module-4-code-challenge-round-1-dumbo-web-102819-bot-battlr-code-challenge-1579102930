import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    bots: [],
    yourArmy: [],
    botCardClicked: false,
    botSpecObj: {}
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(botsArr => this.setState({ bots: botsArr}))
  }

  handleClick=(botObj) => {

    this.setState({
      botCardClicked: true,
      botSpecObj: botObj
    })
  }

  addBotToArmy=(botObj) => {
    if(this.state.yourArmy.includes(botObj)){
      alert(`${botObj.name} is already in your army !`)
    }else{
    this.setState({
      yourArmy: [...this.state.yourArmy, botObj]
    })}

    this.setState({
      botCardClicked: false
    })
  }
  
  removeBotFromArmy=(botObj) => {
    let newArry = [...this.state.yourArmy].filter((bot) => {
      return bot.id !== botObj.id
    })
       this.setState({
         yourArmy: newArry
       })
  }

  handleGoBack=() => {
    this.setState({
      botCardClicked: false
    })
  }

  render() {
   
    return (
      <div>
        <YourBotArmy bots={this.state.yourArmy} handleClick={this.removeBotFromArmy}/>
        <BotCollection handleGoBack={this.handleGoBack} bots={this.state.bots} handleClick={this.handleClick} botCardClicked={this.state.botCardClicked} specBot={this.state.botSpecObj} handleEnlist={this.addBotToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
