import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {


  state = {
    bots: [],
    myBots:[],
    isCliked: false,
    showBox: ''
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


  handle2Click = (bot) =>{
   this.setState({
      bots: bot
   })
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
        <BotCollection bots={this.state.bots}  handleClick={this.handleClick} handle2Click={this.handle2Click}/>
       {/* <BotCollection bots={this.state.bots}  handle2Click={this.handle2Click}/> */}
        {/* put your components here */}

      </div>
    );
  }

}

export default BotsPage;
