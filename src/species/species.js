import React, { Component } from 'react';

import fetchData from '../fetchData';
import Spin from '../spinner/spin';
import './species.css'

class Species extends Component {
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
            console.log(search)
            this.setState({searchResults: [], isLoading: true})
            fetchData('species', search, this.setSearchResults)
        }
    }
    render(){
        const results = this.state.searchResults.map((specie, index) => {
            return (
                <div key={index} className="specie">
                    <h3>{specie.name}</h3>
                    <p>Classification: {specie.classification}</p>
                    <p>Language: {specie.language}</p>
                    <p>Lifespan: {specie.average_lifespan}</p>
                    <p>Average height: {specie.average_height}m</p>
                </div>
            )
        });
        return (
            <>
                <div className="search-form">
                    <input type="text" name="specie" 
                        placeholder="Enter specie name"
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

export default Species