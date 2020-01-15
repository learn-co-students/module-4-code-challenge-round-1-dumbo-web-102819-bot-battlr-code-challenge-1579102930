import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: [],
    botspec: false,
    selected: {}
  }

  

  showBotSpec = (bot) => {
    this.setState({
      botspec: true,
      selected: bot
    })
  }

  hideBotSpec = () => {
    this.setState({
      botspec: false
    })
  }

  removeBotFromArmy = (bot) => {
    if (this.state.army.includes(bot)) {
      let armyCopy = [...this.state.army]
      let removeIndex = armyCopy.findIndex((element) => { return element.id === bot.id})
      console.log(removeIndex)
      armyCopy.splice(removeIndex, 1)
      this.setState({
        army: armyCopy
      }, () => { console.log(this.state.army)})
    }
  }

  addBotToArmy = (bot) => {
    if (!this.state.army.includes(bot)) {
      // console.log("i am not already here")
      this.setState({
        army: [...this.state.army, bot],
        botspec: false
      })
    } 

    // this.setState({
    //   army: [...this.state.army, bot]
    // })
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then((response) => {
      // console.log(response)
      this.setState({
        bots: response
      })
    })
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy  army={this.state.army} removeBotFromArmy={this.removeBotFromArmy} /> 
        {this.state.botspec? <BotSpecs addBotToArmy={this.addBotToArmy} hideBotSpec={this.hideBotSpec} bot={this.state.selected} /> : <BotCollection bots={this.state.bots} addBotToArmy={this.addBotToArmy} showBotSpec={this.showBotSpec} />}  
      </div>
    );
  }

}

export default BotsPage;
