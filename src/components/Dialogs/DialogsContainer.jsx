import './Dialogs.css'
// import { Chat } from './Chat/Chat'
// import { Message } from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'




export const DialogsContainer = (props) => {
    console.log(props);

    let state = props.store.getState().dialogsPage
    


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <>
            <Dialogs 
                updateNewMessageBody={onNewMessageChange} 
                sendMessage={onSendMessageClick}
                dialogsPage={state}
            />
        </>
    )
}