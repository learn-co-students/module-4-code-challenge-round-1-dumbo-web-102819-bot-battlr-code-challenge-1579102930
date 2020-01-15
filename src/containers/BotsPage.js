import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'


class BotsPage extends React.Component {


  state = {
    botArray: [],
    workingBotArray: [],
    armyArray: [],
    botObj: {},
    enlistClick: false,
    goBackClick: false
  }

  
  // FETCH ALL BOTS
  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(resp => resp.json())
    .then(allBots => {
      this.setState({
        botArray: allBots,
        workingBotArray: allBots
      })
    })
  }


  // ADD BOT
  addBot = (bot) => {
      this.setState({
        armyArray: [...this.state.armyArray, bot]
      })
  }
  
  // REMOVE BOT
  removeBot = (bot) => {
    let filterArray = this.state.armyArray.filter(oneBot => oneBot.id !== bot.id)
    
    this.setState({
      armyArray: filterArray
    })
  }



  // GRAB SPECIFIC BOT TO WORK WITHIN COMPONENT
  isClicked = (bot) => {
    this.setState({
      botObj: bot
    })
  }
  


  // RENDER APPROPRIATE COMPONENT TO PAGE
  renderCorrectComponent = (bot) => {
    
    if(this.state.botObj === bot){

      return <BotSpecs 
                bot={this.state.botObj}
                addBot={this.addBot}
                enlistClick={this.state.enlistClick} 
                goBackClick={this.state.goBackClick}
                goBackToAllBots={this.goBackToAllBots}
             />
    } else {

      return <BotCollection
              armyArray={this.state.armyArray}
              botArray={this.state.workingBotArray} 
              isClicked={this.isClicked} 
            />     
    }
  }
  
      
  goBackToAllBots = () => {
    this.setState({
      goBackClicked: true
    })
  }
  

  


  render() {

    return (
      <div>

        <YourBotArmy 
          armyArray={this.state.armyArray} 
          removeBot={this.removeBot} 
        />

        {this.renderCorrectComponent()}
       
        {/* <BotCollection 
          botArray={this.state.workingBotArray} 
          addBot={this.addBot} 
          isClicked={this.isClicked} 
        /> */}

      </div>
    );
  }

}

export default BotsPage;
