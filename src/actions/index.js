export const addMessage = text => {
  return {
    type: 'ADD_MESSAGE',
    created: Date.now(),
    text
  }
}

export const deleteMessage = id => {
  return {
    type: 'DELETE_MESSAGE',
    id
  }
}