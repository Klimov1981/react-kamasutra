const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
            ]
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.postsData.length + 1,
                message: this._state.profilePage.newPostText,
                likeNumber: 0,
            };
            this._state.profilePage.postsData = [
                ...this._state.profilePage.postsData,
                newPost
            ];
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

// Expose store globally (for debugging purposes)
window.store = store