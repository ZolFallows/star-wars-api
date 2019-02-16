import React, { Component } from 'react';

import fetchData from '../fetchData';
import Spin from '../spinner/spin';
import './vehicles.css'

class Vehicles extends Component {
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
            fetchData('vehicles', search, this.setSearchResults)
        }
    }
    render(){
        const results = this.state.searchResults.map((vehicle, index) => {
            return (
                <div key={index} className="vehicle">
                    <h3>{vehicle.name}</h3>
                    <p>Model: {vehicle.model}</p>
                    <p>Total crew: {vehicle.crew}</p>
                    <p>Max speed in atmosphere: {vehicle.max_atmosphering_speed}km/s</p>
                </div>
            )
        });
        return (
            <>
                <div className="search-form">
                    <input type="text" name="vehicle" 
                        placeholder="Enter vehicle name/model"
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

export default Vehicles