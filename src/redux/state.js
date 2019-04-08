const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

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
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        const newPost = {
          id: 3,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        return;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        return;
      case UPDATE_NEW_MESSAGE_BODY:
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
        return;
      case SEND_MESSAGE:
        const body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = "";
        this._state.dialogsPage.messages.push({ id: 6, message: body });
        this._callSubscriber(this._state);
        return;
      default:
        return;
    }
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};

export const updateNewPostTextActionCreator = value => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: value
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};

export const updateNewMessageBodyCreator = body => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
};

export default store;
window.store = store; // for debugging purpose
