import React, { Component } from 'react'
import SendMessage from './SendMessage'
import ChatDisplay from './ChatDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SendMessage />
        <ChatDisplay />
      </div>
    )
  }
}

export default App