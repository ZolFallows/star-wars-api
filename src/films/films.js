import React, { Component } from 'react';

import fetchData from '../fetchData';
import Spin from '../spinner/spin';
import './films.css'

class Films extends Component {
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
            fetchData('films', search, this.setSearchResults)
        }
    }
    render(){
        const results = this.state.searchResults.map((film, index) => {
            return (
                <div key={index} className="episode">
                    <h2>Episode {film.episode_id}</h2>
                    <h3>{film.title}</h3>
                    <p>{film.opening_crawl}</p>
                </div>
            )
        });
        return (
            <>
                <div className="search-form">
                    <input type="text" name="film" 
                        placeholder="Enter episode name"
                        autoComplete="off" 
                        onKeyPress={this.handleKeyPress} 
                        required
                    />
                </div>
                <div className="search-box">
                    {this.state.isLoading &&   <Spin />}
                    <div className="search-result">
                        {results}
                    </div>
                </div>
            </>
        )
    }
}

export default Films