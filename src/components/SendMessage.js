import React from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../actions'

let SendMessage = ({dispatch}) => {
  let input
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (input.value.trim()) {
          dispatch(addMessage(input.value))
          input.value = ''
        }
        document.getElementById('msg-input').focus()
      }}
    >
      <input
        id="msg-input"
        ref={node => input = node}
        placeholder="Message"
        autoFocus
      />
      <button>Send</button>
    </form>
  )
}

SendMessage = connect()(SendMessage)

export default SendMessage