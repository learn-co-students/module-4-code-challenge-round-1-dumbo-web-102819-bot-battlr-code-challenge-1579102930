import React from "react";
import BotCollection from "./BotCollection";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  

  state = {
    allBots: [],
    yourArmy: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r=> r.json())
    .then(botArray => this.setState({allBots: botArray}) )
  }

  handleMoveToArmy = (bot) => {
    if (this.state.yourArmy.includes(bot)){
      return 
    }
    else 
      this.setState({ yourArmy: [...this.state.yourArmy, bot] })
  }

    //console.log(bot)
    //let onebot = this.state.allBots
    //return <div>werftyujk</div>
    //console.log(bot)
    //debugger 
    // if (bot === undefined)
    // {
    //   null
    // }
    // else 
    // {
      // myArmy = this.state.yourArmy.map((bot) => {
      //   return <BotCard  bot ={bot}/> 
      // })
      
      // return myArmy
      //return <BotCard bot={bot} />
    // }
    //{(bot === undefined) ? null : <BotCard bot={bot} /> }
    //console.log(bot)
  // }

  handleRemoveFromArmy = (idx) => {

    debugger 

    this.state.yourArmy.splice(idx, 1)

    this.setState({
      yourArmy: [...this.state.yourArmy]
    })
  }

  render() {
    return (
      <div>
        {<YourBotArmy bots={this.state.yourArmy} handleRemoveFromArmy={this.handleRemoveFromArmy} />}
        {<BotCollection allBots={this.state.allBots} handleMoveToArmy={this.handleMoveToArmy} />} 
      </div>
    );
  }

}

export default BotsPage;
