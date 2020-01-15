import React from "react";
import  BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpec from '../components/BotSpecs';
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {

  state = {
    usersBots: [],
    bots: [],
    currBot: null
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(bots => this.setState({ bots }))
  }

  handleAddBots = (bot, id) => {    
    
    let foundBot = this.state.bots.find(bot => bot.id === id)

    let listBots = this.state.usersBots.map(bot => bot.name);

    if(!listBots.includes(foundBot.name)) {
      let usersBots = [...this.state.usersBots, foundBot];
      this.setState({ 
        usersBots
       });
    }


    

  }

  handleRemoveBots = (bot, id) => {
    let newBots = [...this.state.usersBots];
    
    newBots = newBots.filter(bot => bot.id !== id);

    this.setState({usersBots: newBots})
  }

  changeCurrBot = () => {
    this.setState({ currBot: null})
  }

  getCurrBot = (bot, id) => {
    let foundBot = this.state.bots.find(bot => bot.id === id)
    this.setState({currBot: foundBot})
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          handleClick={this.handleRemoveBots}
          bots={this.state.usersBots}
        />
        {this.state.currBot ? <BotSpecs changeCurrBot={this.changeCurrBot} handleAddBots={this.handleAddBots} bot={this.state.currBot} /> : null}
        <BotCollection 
          handleClick={this.getCurrBot}
          bots={this.state.bots}
        />
      </div>
    );
  }

}

export default BotsPage;
