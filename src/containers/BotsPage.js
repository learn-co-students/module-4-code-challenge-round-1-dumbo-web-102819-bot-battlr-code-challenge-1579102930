import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state ={
  	bots: [],
  	myArmy: [],
  	showingStats: false,
  	tempBot: {}
  }

  botShowStatOnClick = (bot) => {
    this.setState({
      showingStats: true,
      tempBot: bot
    })
  }

  backOnClick = () => {
  	//TODO: NEver finshed
  	//The logic is there, but i prob passed the details wrong in one of the props.
  	this.setState({
  		showingStats: false
  	})
  }

  componentDidMount(){
  	//console.log("Fetching Data")
  	fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  		.then((r) => r.json())
  		.then((bots) => {
  			//console.log(bots)

  			this.setState({
  				bots: bots
  			})
  		})
  }

  addToMyArmy = (bot) => {
  	//If not already in my army then add it in
  	//console.log("add to army", bot)
  	//console.log("Already In Army: ", this.state.myArmy.includes(bot));
  	if (!this.state.myArmy.includes(bot))
  	{
  		let newArmy = [...this.state.myArmy, bot]
	  	this.setState({
	  		myArmy: newArmy,
	  		showingStats: false
	  	})
  	}
  	else
  	{ //Already in the army
  		console.log("Error already in army", bot);
  		alert("Bot Already in army");
  	}
  }

  removeFromArmy = (bot) => {
  	//Find the object and remove it.
  	let indexToRemove = this.state.myArmy.indexOf(bot);
  	//console.log("Army", this.state.myArmy)
  	//console.log("Remove Index:", indexToRemove)

  	let newArmy = this.state.myArmy
  	newArmy.splice(indexToRemove, 1);
  	//console.log("New Army", newArmy)
  	this.setState({
  		myArmy: newArmy
  	})
  }

  render() {
  	//console.log("Rendering Bot Page")
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.state.myArmy} deleteFromArmy={this.removeFromArmy}/>
        <BotCollection bots={this.state.bots} 
        		addToArmy={this.addToMyArmy} 
        		showStat={this.botShowStatOnClick}
        		showingStats={this.state.showingStats}
        		botShowStatOnClick={this.botShowStatOnClick}
        		tempBot={this.state.tempBot}
        		backOnClick={this.backOnClick}/>
      </div>
    );
  }

}

export default BotsPage;
