const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
      ]
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

export default store;
window.store = store; // for debugging purpose
