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
            <form className="ui form">
                <div className="field">
                    <label>Filter</label>
                    <select onChange={this.handleChange} className="ui fluid dropdown" value={this.props.filterBy ? this.props.filterBy : "none"}>
                        <option value="none">None</option>
                        <option value="assault">Assault</option>
                        <option value="defender">Defender</option>
                        <option value="support">Support</option>
                    </select>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form> 
        );
    }
}

export default Filter;