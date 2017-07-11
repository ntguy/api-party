import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import './Pokeapi.css'
import PokemonData from './PokemonData'

class Pokeapi extends Component {
    state ={
        pokeName: '',
    }

    handleChange = (ev) => {
        this.setState({
            pokeName: ev.target.value
        })        
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.setState({pokeName: ''})
        this.props.history.push(`/pokeapi/${this.state.pokeName}`)
    }

    render (){
        return (
            <div className = "pokeapi">
                <img className="pokeapi-logo" 
                    src='https://s-media-cache-ak0.pinimg.com/originals/fd/18/c6/fd18c6d26d4d9d26a0bd9d1a2fb2bd04.png' 
                    alt='pokeapi logo' />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text' 
                            value = {this.state.pokeName}
                            onChange = {this.handleChange}/>
                    </div>
                    <div>
                        <button>Search for Pokemon</button>                    
                    </div>
                </form>

                <Route exact path="/pokeapi" render={ ()=> <h3>Enter a Pokemon</h3> }/>
                <Route path="/pokeapi/:pokeName" component={PokemonData}/>
            </div>
        )
    }
}

export default Pokeapi