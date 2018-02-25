import React from 'react'
import {connect} from 'react-redux'

const ChatDisplay = ({messages}) => (
  <ul>
    {messages.map(msg => (
      <li key={msg.created}>
        {msg.text}
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