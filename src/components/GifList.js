import React from 'react'

class GifList extends React.Component {

  renderGifs = () => {
    return this.props.gifs.slice(0, 3).map((gif, index) =>
      <li>
        <img
          key={index}
          src={gif.images.original.url}
          alt=""
        />
      </li>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.renderGifs()}
      </React.Fragment>
    )
  }

}

export default GifList
