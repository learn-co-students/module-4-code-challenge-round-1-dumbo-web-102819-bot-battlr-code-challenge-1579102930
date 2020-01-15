import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';


class BotsPage extends React.Component {
 
  state= {
    robots: [],
    yourArmy: [],
    expandBot: false,
    selectedBot: []
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

    let theseRobots= this.state.yourArmy.filter(robot => {
      return robot === bot
    })

    let setOfRobotIds= theseRobots.map(robot => {
      return robot.id
    })

    if (setOfRobotIds.includes(bot.id)) {
      return this.setState({
        yourArmy: this.state.yourArmy
      })
    }

    else {

    let robot= this.state.robots.find(robot => {
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
    
    robotIsClicked= (bot) => {

      if (this.state.expandBot) {
        this.setState({
          expandBot: !this.state.expandBot,
          selectedBot: []
        })
      }

      else {

      this.setState({
        expandBot: !this.state.expandBot,
        selectedBot: bot
      }); 
    }
  }

	

  render() {
    return (
      
      <div>
        <YourBotArmy yourArmy={this.state.yourArmy} removeFromArmy={this.removeFromArmy}/>
       
       {this.state.expandBot ? <BotSpecs bot={this.state.selectedBot} handleClick={this.robotIsClicked} addToArmy={this.addToArmy}/> :
  <BotCollection robots={this.state.robots} handleClick={this.robotIsClicked}/> }
      </div>
     
    );
  }

}

export default BotsPage;
