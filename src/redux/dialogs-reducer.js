const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {messages: [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'Hello' },
  { id: 4, message: 'Hello' },
  { id: 5, message: 'opapa' }

],
dialogs: [
  { id: 1, name: 'Bodya' },
  { id: 2, name: 'Volodya' },
  { id: 3, name: 'Stepan' },
  { id: 4, name: 'Artem' },
  { id: 5, name: 'Andriy' }
],
newMessageBody: ""
}


 const dialogsReducer = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
    state.newMessageBody = '';
    state.messages.push( { id: 6, message: body });
    return state;
    default:
                return state;
  }
  
  }
  export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
  ({ type: 'UPDATE-NEW-MESSAGE-BODY', body: body });
 
  export default dialogsReducer;