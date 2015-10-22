import React from 'react'

export default class TweetBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  handleChange(event) {
    this.setState({ text: event.target.value })
  }
  countDownRemainingText() {
    return 140 - this.state.text.length
  }
  isEmpty() {
    return this.state.text.length === 0
  }
  render() {
    return (
      <div className="tweet-box">
        <button className="tweet-btn" type="submit" name="submit" disabled={this.isEmpty()}>Tweet</button>
        <span className="remaining-text">{this.countDownRemainingText()}</span>
        <textarea className="tweet-area" name="tweet" onChange={this.handleChange.bind(this)}
         placeholder="進捗どうですか？" maxLength="140"></textarea>
      </div>
    )
  }
}
