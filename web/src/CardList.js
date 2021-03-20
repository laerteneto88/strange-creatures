import React, { Component } from 'react'
import Card from './Card'
import SearchBox from './SearchBox'

class CardList extends Component {
  constructor () {
    super()
    this.state = {
      criatures: [],
      searchfield: ''
    }
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value })
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    // or
    //fetch('http://localhost:8081/criatures/read')
      .then(response => response.json())
      .then(users => this.setState({ criatures: users }))
  }

  render () {
    const { criatures, searchfield } = this.state
    const filteredCriatures = criatures.filter(criature => {
      return criature.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return (
      <div className='tc'>
        <h1 className='f1'>List of criatures</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {filteredCriatures.map((user, i) => {
          return (
            <Card
              key={filteredCriatures[i].id}
              id={filteredCriatures[i].id}
              name={filteredCriatures[i].name}
              email={filteredCriatures[i].email}
            />
          )
        })}
      </div>
    )
  }
}

export default CardList
