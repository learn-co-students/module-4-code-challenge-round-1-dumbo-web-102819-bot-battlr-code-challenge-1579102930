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
    selected: {},
    filtering: false
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
    } else {
      alert("I'm already in your army dude")
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
  filter = (event) => {
    // console.log(event.target.id)

    if (event.target.id === 'sort') {
      let newBotsArray = [...this.state.bots]
      newBotsArray.sort(function(a, b) {
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0
      })
      // console.log(newBotsArray)
      this.setState({
        bots: newBotsArray
      })
    } else if (event.target.id ==='Assault') {
      console.log("assault")
      let newBotsArray = [...this.state.bots]
      newBotsArray.filter((element) => {
        console.log(element.bot_class)
        return (element.bot_class === 'Assault')
      })
      this.setState({
        bots: newBotsArray, 
        filtering: true
      })
    }

  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy  army={this.state.army} removeBotFromArmy={this.removeBotFromArmy} /> 
        <div className="buttonContainer">
          ::SORT METHODS:: <br></br>
        <button className="filter" onClick={this.filter} id="sort">SKU#</button>:
        {/* <button className="filter" onClick={this.filter} id="Assault"><i className="icon military" /></button> */}
        </div> 
        <br>
        </br>
        {this.state.botspec? <BotSpecs addBotToArmy={this.addBotToArmy} hideBotSpec={this.hideBotSpec} bot={this.state.selected} /> : <BotCollection bots={this.state.bots} addBotToArmy={this.addBotToArmy} showBotSpec={this.showBotSpec} />}  
      </div>
    );
  }

}

export default BotsPage;
