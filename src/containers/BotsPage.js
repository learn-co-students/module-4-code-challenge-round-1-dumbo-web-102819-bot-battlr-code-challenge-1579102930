import React from "react";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then((bots) => {
      this.setState({
        bots: bots
      }, ()=>{console.log(this.state)})
    })
  }

  render() {
    return (
      <div>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
