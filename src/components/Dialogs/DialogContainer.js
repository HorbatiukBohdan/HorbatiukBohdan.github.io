import {connect} from 'react-redux'
import {updateNewMessageBody, sendMessage} from './actions'
import Dialog from './Dialogs'

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => dispatch(updateNewMessageBody(body)),
        sendMessage: () => dispatch(sendMessage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)
