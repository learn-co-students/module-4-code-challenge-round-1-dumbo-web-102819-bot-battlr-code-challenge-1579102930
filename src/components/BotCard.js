import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from "../containers/YourBotArmy";

const BotCard = props => {
  const { bot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }
  // const removeFromAll = this.props.allBots.splice( allBots.indexOf(bot), 1 )
  // const addToArmy = this.props.yourBots.push(bot) 
  console.log(this.props)
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => {
          // console.log(this.props)
          // HAD TROUBLE GETTING THE PROPS FROM BOTCOLLECTION PASSED
        removeFromAll()
        addToArmy()
        }}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
