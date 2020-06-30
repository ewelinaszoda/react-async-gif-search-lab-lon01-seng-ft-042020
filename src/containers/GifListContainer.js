import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    gifs: [],
    // why userSearch needs to be here - to be able to get the gifs
    userSearch: ""
  }

  updateUserSearch = (event) => {
    this.setState({
      userSearch: event.target.value
    })
  }
  getGifs = () => {
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.userSearch.split(" ").join("%20")}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
  }

  handleUpdate = (e) => {
    e.preventDefault()
    this.getGifs()
      .then(gifts => this.setState({
        gifs: gifts.data
      }))
  }

  componentDidMount() {
    // this.handleUpdate({ preventDefault: () => console.log('hacky')})
    this.getGifs()
      .then(gifts => this.setState({
        gifs: gifts.data
      }))
  }

  render() {
    return (
      <div>
        <div>
          <GifSearch
            handleUpdate={this.handleUpdate}
            userSearch={this.state.userSearch}
            updateUserSearch={this.updateUserSearch}
          />
        </div>
        <ul>
          <GifList
            className='gif-list'
            gifs={this.state.gifs}
          />
        </ul>
      </div>
    )
  }
}

export default GifListContainer