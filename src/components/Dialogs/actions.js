import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from './constants'

export const sendMessage = () => ({type: SEND_MESSAGE})

export const updateNewMessageBody = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body})
