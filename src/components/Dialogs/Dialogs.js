import React from 'react'
import {NavLink} from 'react-router-dom'
import {DialogWrapper, MessagesWrapper} from './DialogStyled'

const DialogItem = (props) => {
    const path = "/dialogs/1" + props.id
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = (props) => {
    const {dialogs, messages, updateNewMessageBody, sendMessage} = props

    const dialogsElements = dialogs.map(dialogItem => <DialogItem name={dialogItem.name} id={dialogItem.id} />)

    const messagesElements = messages.map(messageItem => <div>{messageItem.message}</div>)

    const newMess = dialogs.newMessageBody

    const onNewMessageChange = (e) => {
        updateNewMessageBody(e.target.value)
    }

    const onSendMessage = () => {
        sendMessage()
    }

    return (
        <DialogWrapper>
            <div>
                {dialogsElements}
            </div>
            <MessagesWrapper>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={newMess} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                </div>
                <button onClick={onSendMessage}>
                    Activate Lasers
                </button>
            </MessagesWrapper>
        </DialogWrapper>
    )
}
export default Dialogs
