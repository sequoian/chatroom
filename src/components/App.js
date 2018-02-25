import React, { Component } from 'react'
import './App.css'
import SendMessage from './SendMessage'
import ChatDisplay from './ChatDisplay'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChatDisplay />
        <SendMessage />
      </div>
    )
  }
}

export default App