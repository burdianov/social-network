import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const dialogs = [
  { id: 1, name: "Jorica" },
  { id: 2, name: "Petrica" },
  { id: 3, name: "Volodea" },
  { id: 4, name: "Anton" },
  { id: 5, name: "Cocos" }
];

const messages = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Hi" },
  { id: 3, message: "How are you" },
  { id: 4, message: "Fine" },
  { id: 5, message: "Good" }
];

const posts = [
  { id: 1, message: "Hi, how are you?", likesCount: "3" },
  { id: 2, message: "It's my first post", likesCount: "5" }
];

ReactDOM.render(
  <App dialogs={dialogs} messages={messages} posts={posts} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
