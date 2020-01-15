import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  
  state = {
    bots:[],
    army:[]
  }

  componentDidMount() {
    this.getBots()
  }

  getBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => this.setState({
      bots:bots
    }, () => {
      console.log(this.state.bots)
    }))
  }

  enlistDischarge = (selectedbot) => {
    const discharged = !!this.state.army.find(bot => bot.id === selectedbot.id)

    if (discharged) {
      let newBots = [...this.state.bots,selectedbot],
          newArmy = [...this.state.army].filter(bot => bot.id !== selectedbot.id)
      this.setState({
        bots:newBots,
        army:newArmy
      },() => {
        console.log(this.state.bots,this.state.army);
      })
    } else {
      let newBots = [...this.state.bots].filter(bot => bot.id !== selectedbot.id),
          newArmy = [...this.state.army,selectedbot]
          
      this.setState({
        bots:newBots,
        army:newArmy
      }, () => {
        console.log(this.state.army,this.state.bots)
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} discharge={this.enlistDischarge} />
        <BotCollection bots={this.state.bots} enlist={this.enlistDischarge} /> 
      </div>
    );
  }

}

export default BotsPage;
