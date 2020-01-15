import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {


  state = {
    bots: [],
    myBots:[]
  }
  //start here with your code for step one


  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(resp => resp.json())
    .then(botsArray =>{
      this.setState({
        bots: botsArray
      })
    })
  }

  handleClick = (bot) =>{
    if(!this.state.myBots.includes(bot)){
    this.setState({
       myBots:[...this.state.myBots,bot]
    })
    }
  }


  removeBot = (bot) =>{
    this.setState({
      myBots: this.state.myBots.filter(bots => bots !== bot)
    })
  }

  render() {

    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} removeBot={this.removeBot}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>
        {/* put your components here */}

      </div>
    );
  }

}

export default BotsPage;
