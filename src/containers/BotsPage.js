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

  handleClick=(BotObj) => {
    
    this.setState({
      yourArmy: [...this.state.yourArmy, BotObj]
    })
  }


  render() {
    
    return (
      <div>
        <YourBotArmy bots={this.state.yourArmy}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
