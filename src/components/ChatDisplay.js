import React from 'react'
import {connect} from 'react-redux'
import './ChatDisplay.css'

const ChatDisplay = ({messages}) => (
  <ul id="chat-display">
    {messages.map(msg => (
      <li key={msg.created}>
        <div>{msg.text}</div>
      </li>
    ))}
  </ul>
)

const mapStateToProps = state => {
  return {
    messages: state
  }
}

const ChatDisplayContainer = connect(
  mapStateToProps
)(ChatDisplay)

export default ChatDisplayContainer