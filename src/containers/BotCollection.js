import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  //your code here
	mapAllBots = () =>{
		return this.props.bots.map(bot => {
			return <BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick} />
		})
	}

	 handleClickView = () =>{ 
		 return this.props.bots.map(bot=>{
			return <BotSpecs bot={bot} />
		 })

	  }


	// mapAllBots2 = () =>{
	// 	return this.props.bots.map(bot => {
	// 		return <BotSpecs bot={bot} handle2Click={this.props.handle2Click}/>	
	// 	})
	// }

   


  render(){
	
 
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			
				{this.mapAllBots()}
				{this.handleClickView()}
			   {/* {this.mapAllBots2()} */}
			 
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
