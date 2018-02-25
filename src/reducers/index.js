const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          text: action.text,
          created: action.created
        }
      ]
    case 'DELETE_MESSAGE':
      return state.filter(msg => 
        msg.created !== action.id
      )
    default:
      return state
  }
}

export default messages