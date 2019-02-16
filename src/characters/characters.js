import React, { Component } from 'react';

import fetchData from '../fetchData';
import Spin from '../spinner/spin';
import './characters.css'

class Characters extends Component {
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
            fetchData('people', search, this.setSearchResults)
        }
    }
    render(){
        const results = this.state.searchResults.map((char, index) => {
            return (
                <h2 key={index}>{char.name}</h2>
            )
        });
        return (
            <>
                <div className="search-form">
                    <input type="text" name="people" 
                        placeholder="Enter character name"
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

export default Characters
