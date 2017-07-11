import React, { Component } from 'react'

class Pokemon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {}
    }

    this.fetchPokemonData(props)  
  }

  fetchPokemonData(props) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.pokeName}`)
      .then(data => data.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchPokemonData(nextProps)
    }
  }

  render() {
    const { pokemon } = this.state
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    return (
      <div className="pokemon">
        <img src={url} alt="pokemon avatar" width='30%'/>
        <h1>{pokemon.name}</h1>
        <h2>Order: #{pokemon.order}</h2>
        <h2>Base XP: {pokemon.base_experience}</h2>
      </div>
    )
  }
}
export default Pokemon