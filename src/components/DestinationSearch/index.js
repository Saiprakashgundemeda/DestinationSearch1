// Write your code here

import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchValue: '',
  }

  onChangeSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {searchValue} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestinationItem =>
      eachDestinationItem.name
        .toLowerCase()
        .includes(searchValue.toLowerCase()),
    )

    return (
      <div className="background-section">
        <h1 className="heading">Destination Search</h1>
        <div className="searchbar-container">
          <input
            placeholder="search"
            type="search"
            className="input-container"
            onChange={this.onChangeSearchValue}
          />
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon-image"
            />
          </div>
        </div>
        <ul className="destination-list-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
