import React, { Component } from 'react';

class Filter extends Component {

    handleChange = (evt) => {
        if(evt.target.value == "none"){
            this.props.changeFilterValue(null)
        } else {
            this.props.changeFilterValue(evt.target.value)
        }
    }

    render() {
        return (
            <form className="ui form" style={{width: "6em", margin: "auto", marginBottom: "1em"}}>
                <div className="field" style={{width: "6em"}}>
                    <label style={{textAlign: "center"}}>Filter</label>
                    <select onChange={this.handleChange} className="ui fluid dropdown" value={this.props.filterBy ? this.props.filterBy : "none"}>
                        <option value="none">None</option>
                        <option value="assault">Assault</option>
                        <option value="defender">Defender</option>
                        <option value="support">Support</option>
                    </select>
                </div>
            </form> 
        );
    }
}

export default Filter;