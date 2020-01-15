import React, { Component } from 'react';

class Sorter extends Component {

    state = {
        search:""
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            search:event.target.value
        })
        this.props.handleSearch(event.target.value)
    }
    render() {
        return (
            <div style={{textAlign:'center', marginBottom:'1rem'}}>
                <label value="Search">Search:</label>
                <input type="text" onChange={this.handleChange} value={this.state.search}/>
            </div>
        );
    }
}

export default Sorter;