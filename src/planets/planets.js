import React, { Component } from 'react';

import fetchData from '../fetchData';
import Spin from '../spinner/spin';
import './planets.css'

class Planets extends Component {
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
            fetchData('planets', search, this.setSearchResults)
        }
    }
    render(){
        const results = this.state.searchResults.map((planet, index) => {
            return (
                <div key={index} className="planet">
                    <h3>Planet {planet.name}</h3>
                    <p>Population: {planet.population}</p>
                    <p>Terrian: {planet.terrain}</p>
                    <p>Diameter: {planet.diameter}km</p>
                </div>
            )
        });
        return (
            <>
                <div className="search-form">
                    <input type="text" name="planet" 
                        placeholder="Enter planet name"
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

export default Planets