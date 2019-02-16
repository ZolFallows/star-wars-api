import React, { Component } from 'react';
import './nav.css';
class Nav extends Component {
    render(){
        return (
            <nav>
                <button onClick={() => this.props.history.push('/people')}>Characters</button>
                <button onClick={() => this.props.history.push('/films')}>Films</button>
                <button onClick={() => this.props.history.push('/planets')}>Planets</button>
                <button onClick={() => this.props.history.push('/starships')}>Starships</button>
                <button onClick={() => this.props.history.push('/vehicles')}>Vehicles</button>
                <button onClick={() => this.props.history.push('/species')}>Species</button>
            </nav>
        )
    }
} 

export default Nav