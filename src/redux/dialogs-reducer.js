import {UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE} from '../components/Dialogs/constants'

let initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'opapa'}

    ],
    dialogs: [
        {id: 1, name: 'Bodya'},
        {id: 2, name: 'Volodya'},
        {id: 3, name: 'Stepan'},
        {id: 4, name: 'Artem'},
        {id: 5, name: 'Andriy'}
    ],
    newMessageBody: ""
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const newMessages = state.messages.push({id: 6, message: state.newMessageBody})
            const nextState = {
                ...state,
                messages: [...state.messages, newMessages]
            }
            nextState.newMessageBody = '' //To do

            return nextState
        default:
            return state
    }

}

export default dialogsReducer
