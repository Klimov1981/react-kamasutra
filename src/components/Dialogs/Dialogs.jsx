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

const Message = (props) =>{
    return (
        <div className="message">{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <>
            <div className='dialogs'>
                <div className='chats'>
                    <Chat name='Al' id='1' />
                    <Chat name='Lee' id='2' />
                    <Chat name='Maho' id='3' />
                    <Chat name='Lale' id='4' />
                    <Chat name='Su' id='5' />
                </div>
                <div className='messages'>
                    <Message message = 'Hi'/>
                    <Message message = 'How are you?'/>
                    <Message message = 'Fine, thanks'/>
                </div>
            </div>
        </>
    )
}