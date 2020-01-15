import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
 
  state= {
    robots: [],
    yourArmy: []
  }

  componentDidMount () {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then((botsArray) => {
      this.setState({
        robots: botsArray
      })
    })
  }

  addToArmy= (bot) => {

    const filteredArmy= this.state.yourArmy.filter(robot => {
      return robot.id === bot.id
    })

    console.log(filteredArmy)

    if (filteredArmy.includes(bot)) {
      this.setState({
        yourArmy: this.state.yourArmy
      })
    }

    else {
    let robot= this.state.robots.filter(robot => {
      return robot.id ===bot.id
    })

    this.setState({
      yourArmy: [...this.state.yourArmy, robot]
    })
  }
}

  removeFromArmy= (bot) => {
    let the_robots= this.state.yourArmy.filter(robot => {
      return robot !== bot
    })
    this.setState({
      yourArmy: the_robots
    })
  }

  render() {
    return (
      
      <div>
        <YourBotArmy yourArmy={this.state.yourArmy} handleClick={this.removeFromArmy}/>
       <BotCollection robots={this.state.robots} handleClick={this.addToArmy}/>
      </div>
     
    );
  }

}

export default BotsPage;
