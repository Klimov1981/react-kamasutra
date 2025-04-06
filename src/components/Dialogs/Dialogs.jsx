import './Dialogs.css'
import { Chat } from './Chat/Chat'
import { Message } from './Message/Message'




export const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(
        (chat) => {
            return <Chat key={chat.id} name={chat.name} id={chat.id} />
        }
    )

    let messagesElements = props.state.messagesData.map(
        (message) => {
            return <Message key={message.id} message={message.message} />
        }
    )
    return (
        <>
            <div className='dialogs'>
                <div className='chats'>
                    {dialogsElements}

                </div>
                <div className='messages'>
                    {messagesElements}
                </div>
            </div>
        </>
    )
}