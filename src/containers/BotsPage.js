import React from "react";
import BotCollection from "./BotCollection";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  

  state = {
    allBots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r=> r.json())
    .then(botArray => this.setState({allBots: botArray}) )
  }

  createBotDiv = () => {
    return this.state.allBots.map((bot) => {
      return <BotCard handleMoveToArmy={this.handleMoveToArmy} bot={bot} />
    })
  }

  handleMoveToArmy = (bot) => {
    //let onebot = this.state.allBots
    //return <div>werftyujk</div>
    //console.log(bot)
    //debugger 
    if (bot === undefined)
    {
      null
    }
    else 
    {
      //console.log(bot)
      return <BotCard bot={bot} />
    }
    //{(bot === undefined) ? null : <BotCard bot={bot} /> }
    //console.log(bot)
  }

  render() {
    return (
      <div>
        {<YourBotArmy handleMoveToArmy={this.handleMoveToArmy} />}
        {<BotCollection createBotDiv={this.createBotDiv}/>} 
      </div>
    );
  }

}

export default BotsPage;
