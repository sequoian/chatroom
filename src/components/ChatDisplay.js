import React from 'react'
import {connect} from 'react-redux'
import './ChatDisplay.css'

const ChatDisplay = ({messages}) => (
  <ul id="chat-display">
    <li><div>This is a really long test message.  It will be used to test message format and styling.  TODO: delete this before production release.</div></li>
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