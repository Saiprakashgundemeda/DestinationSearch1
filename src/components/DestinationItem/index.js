// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="list-item-container">
      <img src={imgUrl} alt={name} className="place-image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
