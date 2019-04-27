// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "3" },
        { id: 2, message: "It's my first post", likesCount: "5" }
      ],
      newPostText: "default text"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Jorica" },
        { id: 2, name: "Petrica" },
        { id: 3, name: "Volodea" },
        { id: 4, name: "Anton" },
        { id: 5, name: "Cocos" }
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Hi" },
        { id: 3, message: "How are you" },
        { id: 4, message: "Fine" },
        { id: 5, message: "Good" }
      ],
      newMessageBody: ""
    }
  }
  // _callSubscriber() {
  //   console.log("State changed");
  // }
  // getState() {
  //   return this._state;
  // },
  // subscribe(observer) {
  //   this._callSubscriber = observer;
  // },
  // dispatch(action) {
  //   this._state.profilePage = profileReducer(this._state.profilePage, action);
  //   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  //   this._state.sidebar = sidebarReducer(this._state.sidebar, action);

  //   this._callSubscriber(this._state);
  // }
};

export default store;
window.store = store; // for debugging purpose
