const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {

  dialogsData: [
    { id: 1, name: "Ali" },
    { id: 2, name: "Halil" },
    { id: 3, name: "Esma" },
    { id: 4, name: "Iskender" },
    { id: 5, name: "Zeynep" },
    { id: 6, name: "Damla" },
    { id: 7, name: "Didem" },
    { id: 8, name: "Binbasi" },
    { id: 9, name: "Kaan" },
    { id: 10, name: "Fikret" }
  ],

  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Fine, thanks" },
    { id: 4, message: "Hi" },
    { id: 5, message: "Yo" },
    { id: 6, message: "How are you?" },
    { id: 7, message: "Fine, thanks" },
    { id: 8, message: "Hi" },
    { id: 9, message: "How are you" },
    { id: 10, message: "Fine, thanks" }
  ],

  newMessageBody: ' ', // Эта строка должна меняться.Содаём для этого action
}


export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  }
}
export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  }
}

export const dialogsReducer = (state = initialState, action) => {

 
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = {
        id: state.messagesData.length + 1,
        message: state.newMessageBody
      }

      {
        return  {
          ...state,
          newMessageBody: '',
          messagesData: [...state.messagesData, body]
        }
      }
    }
    case UPDATE_NEW_MESSAGE_BODY:
      {
        return {
          ...state,
          newMessageBody: action.body
        }
      }
    default:
      return state
  }

}