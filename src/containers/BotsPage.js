import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

class BotsPage extends React.Component {
  
  state = {
    allBots: [],
    yourBots: []
  }
  
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(data => this.setState(
        this.state.allBots = data
      ));
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        {<BotCollection allBots={this.state.allBots} yourBots={this.state.yourBots}/>}
        {<YourBotArmy yourBots={this.state.yourBots}/>}
      </div>
    );
  }

}

export default BotsPage;
