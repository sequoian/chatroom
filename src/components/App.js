import React, { Component } from 'react'
import './App.css'
import SendMessage from './SendMessage'
import ChatDisplay from './ChatDisplay'
import Header from './Header'
import Scroll from '../scroll'

class App extends Component {

  componentDidMount() {
    this.scroll = new Scroll()
  }

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