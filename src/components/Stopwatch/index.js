// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {minutes: 0, seconds: 0, isClicked: true}
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer = () => {
    this.setState({isClicked: false})
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {minutes, seconds} = this.state
    let newMinutes = minutes
    let newSeconds = seconds
    if (seconds === 59) {
      newMinutes += 1
      newSeconds = 0
    } else {
      newSeconds += 1
    }
    this.setState({minutes: newMinutes, seconds: newSeconds})
  }

  stopTimer = () => {
    clearInterval(this.timerID)
    this.setState({isClicked: true})
  }

  resetTimer = () => {
    this.stopTimer()
    this.setState({minutes: 0, seconds: 0})
    this.setState({isClicked: true})
  }

  render() {
    const {minutes, seconds, isClicked} = this.state

    return (
      <div className="container">
        <h1>Stopwatch</h1>
        <div className="stop-watch-card">
          <div className="timer-icon">
            <img
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <p>Timer</p>
          </div>
          <h1>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div>
            <button
              className="button1"
              type="button"
              onClick={isClicked ? this.startTimer : null}
            >
              Start
            </button>

            <button className="button2" type="button" onClick={this.stopTimer}>
              Stop
            </button>
            <button className="button3" type="button" onClick={this.resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
