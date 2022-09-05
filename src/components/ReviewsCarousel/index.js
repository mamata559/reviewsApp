// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftButton = () => {
    const {index} = this.state
    let newIndex = index
    if (index > 0) {
      newIndex -= 1
    } else {
      newIndex = 0
    }
    this.setState({index: newIndex})
  }

  onClickRightButton = () => {
    const {index} = this.state
    let newIndex = index

    if (index < 3) {
      newIndex += 1
    } else {
      newIndex = 3
    }
    this.setState({index: newIndex})
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const newList = reviewsList[index]
    const {imgUrl, username, companyName, description} = newList

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="card-container">
          <button
            type="button"
            className="img-button"
            onClick={this.onClickLeftButton}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="list-container">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="para">{companyName}</p>
            <p className="para-details para">{description}</p>
          </div>
          <button
            type="button"
            testid="rightArrow"
            onClick={this.onClickRightButton}
            className="img-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
