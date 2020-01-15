import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one


  //make state with empty arr for objects, do fetch to get info into state, send down information as props to child comp.


  state = {
    bots: [],
    text: "ok"
  }


// console.log(this.state)
componentDidMount() {
fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
.then(r => r.json())
.then((botObj) => this.setState({ bots: botObj.bots }))
} 


  render() {

    
  console.log(this.state)
    
    return (
      <div>
        <BotCollection bots={this.state.bots} />
        <YourBotArmy bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
