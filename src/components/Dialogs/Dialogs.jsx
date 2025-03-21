import { NavLink } from 'react-router-dom'
import './Dialogs.css'


const Chat = (props) => {
    return (
        <>
            <div className='chat active'>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </>
    )
}

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}

const dialogsData = [
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
]

const messagesData = [
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
]

export const Dialogs = () => {
    let dialogsElements = dialogsData.map(
        (chat) => {
        return    <Chat key={chat.id} name={chat.name} id={chat.id} />
        }
    )

    let messagesElements = messagesData.map(
        (message) => {
          return  <Message key={message.id} message={message.message} />
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