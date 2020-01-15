import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {

  API = `https://bot-battler-api.herokuapp.com/api/v1/bots`

  state = {
    botList: [],
    yourArmy: [],
    infoScreen: false,
    selectedBot: {}
  }

  getBots () {
    return fetch(this.API)
    .then(r => r.json())
    .then((list) => {
      this.setState({
        botList: list
      })
    })
  }


  componentDidMount(){
    this.getBots()
  }

  addToArmy = (clickedBot) => {
    let newArmy = [clickedBot, ...this.state.yourArmy]
    let newList = this.state.botList.filter((oldBot) => oldBot != clickedBot)

    this.setState({
      botList: newList,
      yourArmy: newArmy
    })
  }

  removeFromArmy = (clickedBot) => {
    let newList = [clickedBot, ...this.state.botList]
    let newArmy = this.state.yourArmy.filter((oldBot) => oldBot != clickedBot)
    // console.log(clickedBot, this.state.yourArmy, newArmy);

    this.setState({
      botList: newList,
      yourArmy: newArmy
    })
  }

  showInfo = (bot) => {
    this.setState({
      infoScreen: !this.state.infoScreen,
      selectedBot: bot
    })
  }

  render() {
    return (
    <div>
      <YourBotArmy yourArmy={this.state.yourArmy}
        removeFromArmy={this.removeFromArmy}
      />
      <div className="list specs">
        {this.state.infoScreen ? <BotSpecs bot={this.state.selectedBot} showInfo={this.showInfo} addToArmy={this.addToArmy} /> : <BotCollection botList={this.state.botList} showInfo={this.showInfo} />}
      </div>
    </div>
    );
  }

}

export default BotsPage;
