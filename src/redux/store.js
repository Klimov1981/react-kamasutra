
import { profileReducer } from './profile-reducer' 
import { dialogsReducer } from "./dialogs-reducer"
import { sidebarReducer } from "./sidebar-reducer"

export let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Яблоко", likeNumber: 23 },
                { id: 2, message: "Банан", likeNumber: 244 },
                { id: 3, message: "Апельсин", likeNumber: 24 },
                { id: 4, message: "Груша", likeNumber: 22 },
                { id: 5, message: "Виноград", likeNumber: 2 },
                { id: 6, message: "Киви", likeNumber: 4 },
                { id: 7, message: "Мango", likeNumber: 88 },
                { id: 8, message: "Ананас", likeNumber: 78 },
                { id: 9, message: "Персик", likeNumber: 9 },
                { id: 10, message: "Черешня", likeNumber: 67 }
            ],
            newPostText: '',

        },

        dialogsPage: {
            dialogsData: [
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
            ],

            messagesData: [
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
            ],

            newMessageBody: ' ', // Эта строка должна меняться.Содаём для этого action
        },

        sidebar: {
            friends: [
                { id: 1, name: "Иван", surname: "Иванов" },
                { id: 2, name: "Мария", surname: "Сидорова" },
                { id: 3, name: "Петр", surname: "Петров" },
                { id: 4, name: "Анна", surname: "Кузнецова" },
                { id: 5, name: "Дмитрий", surname: "Лебедев" },
                { id: 6, name: "Елена", surname: "Смирнова" },
                { id: 7, name: "Алексей", surname: "Васильев" },
                { id: 8, name: "Ольга", surname: "Морозова" },
                { id: 9, name: "Сергей", surname: "Николаев" },
                { id: 10, name: "Татьяна", surname: "Романова" }
            ]
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber: () => { },


    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        // action - obj
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

window.store = store