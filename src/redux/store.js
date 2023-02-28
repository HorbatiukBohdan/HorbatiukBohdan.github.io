import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [{ id: 1, message: 'Hi,how are you?', likesCount: 12 },
      { id: 2, message: 'Its my first post', likesCount: 115 }],
      newPostText: "",

    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Hello' },
        { id: 4, message: 'Hello' },
        { id: 5, message: 'opapa' }

      ],
      dialogs: [
        { id: 1, name: 'Bodya' },
        { id: 2, name: 'Volodya' },
        { id: 3, name: 'Stepan' },
        { id: 4, name: 'Artem' },
        { id: 5, name: 'Andriy' }
      ],
      newMessageBody: ""
    }


  },
  _callSubscriber() {
    console.log("State");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

    
  }
}






export default store;