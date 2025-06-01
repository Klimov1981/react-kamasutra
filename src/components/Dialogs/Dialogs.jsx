import './Dialogs.css'
import { Chat } from './Chat/Chat'
import { Message } from './Message/Message'
import { Navigate } from 'react-router-dom'




export const Dialogs = (props) => {
    let state = props.dialogsPage
    
    let dialogsElements = state.dialogsData.map(
        (chat, index) => {
            return <Chat key={index} name={chat.name} id={chat.id} />
        }
    )

    let messagesElements =state.messagesData.map(
        (message, index) => {
            return <Message key={index} message={message.message} />
        }
    )

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()

    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    // if(!props.isAuth) {
    //     return <Navigate to='/login' replace />
    // }
    return (
        <>
            <div className='dialogs'>
                <div className='chats'>
                    {dialogsElements}

                </div>
                <div className='messages'>
                    <div>{messagesElements}</div>
                    <div>
                        <div>
                            <textarea 
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'></textarea>
                        </div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}