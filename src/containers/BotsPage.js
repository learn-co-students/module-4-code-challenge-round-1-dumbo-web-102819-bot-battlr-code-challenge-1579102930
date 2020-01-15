import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    myBots: [],
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then(bots => 
      this.setState({
        allBots: bots
      }))
  } 
  addToArmy = (selectedBot) => {
    this.setState({
      myBots: [...this.state.myBots, selectedBot]
    })
  }

  removeFromArmy = (selectedBot) => {
    this.setState({
      mybots: [...this.state.myBots] - [selectedBot]
    })
  }
  
  

  render() {
    // console.log(this.state.myBots)
    return (
      <div>
        {<YourBotArmy myBots={this.state.myBots} />}

        {<BotCollection allBots={this.state.allBots} addToArmy={this.addToArmy} />}
      
      </div>
    );
  }

}

export default BotsPage;
