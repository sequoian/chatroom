import React from 'react'
import {connect} from 'react-redux'
import './ChatDisplay.css'
import ReactTooltip from 'react-tooltip'
import moment from 'moment'

const ChatDisplay = ({messages}) => (
  <ul id="chat-display">
    {messages.map(msg => (
      <li key={msg.created}>
        <div data-tip data-for={'tt' + msg.created}>{msg.text}</div>
        <ReactTooltip id={'tt' + msg.created} border>
          <span>
            {moment(msg.created).calendar(null, {
              sameElse: 'M/DD/YYYY [at] h:mm A'
            })}
          </span>
        </ReactTooltip>
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