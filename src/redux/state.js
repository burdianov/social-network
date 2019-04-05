let rerenderEntireTree;

let state = {
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
};

export const addPost = () => {
  const newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
};

export default state;
