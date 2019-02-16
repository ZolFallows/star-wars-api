import React, { Component } from 'react';

import fetchData from '../fetchData';
import Spin from '../spinner/spin';
import './starships.css'

class Starships extends Component {
    state = {
        searchResults: [],
        isLoading: false,
    }

    setSearchResults = (data) => {
        this.setState({
            searchResults: data.results,
            isLoading: false,
        })
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter'){
            let search = e.target.value;
            this.setState({searchResults: [], isLoading: true})
            fetchData('starships', search, this.setSearchResults)
        }
    }
    render(){
        const results = this.state.searchResults.map((starship, index) => {
            return (
                <div key={index} className="starship">
                    <h3>{starship.name}</h3>
                    <p>Model: {starship.model}</p>
                    <p>Class: {starship.starship_class}</p>
                </div>
            )
        });
        return (
            <>
                <div className="search-form">
                    <input type="text" name="starship" 
                        placeholder="Enter starship name/model"
                        autoComplete="off" 
                        onKeyPress={this.handleKeyPress} 
                        required
                    />
                </div>
                <div className="search-result">
                    {this.state.isLoading &&   <Spin />} 
                    {results}
                </div>
            </>
        )
    }
}

export default Starships