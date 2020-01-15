import React from "react";
import BotCard from "../components/BotCard";
import uuid from 'uuid'
import BotSpec from '../components/BotSpecs'

class BotCollection extends React.Component {
  
	

	renderBot = () => {
		return this.props.bots.map((bot, index) => {
			return <BotCard handleClick={this.props.handleClick} key={uuid()} bot={bot} botCardClicked={this.props.botCardClicked}/>
		})
	}


	
  render(){
	  
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
	        {this.props.botCardClicked? <BotSpec bot={this.props.specBot} handleGoBack={this.props.handleGoBack} handleEnlist={this.props.handleEnlist}/> : this.renderBot()}  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
