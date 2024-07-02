import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter">
        <h1>
          The Button has been clicked
          <br />
          <span>{count} </span>
          times
        </h1>
        <br />
        <p>Click the button to increase the count!</p>
        <button type="button" onClick={this.onClick}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
