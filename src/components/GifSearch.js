import React from 'react'

class GifSearch extends React.Component {


  render() {
    return (
      <form onSubmit={this.props.handleUpdate}>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search here..."
          // Because event is put as a argument and at the function I can do 
          // onChange={this.props.updateUserSearch}
          onChange={(e) => this.props.updateUserSearch(e)}
          value={this.props.userSearch}>
        </input>
        <button>Search</button>
      </form>
    )
  }

}

export default GifSearch