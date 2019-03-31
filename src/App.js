import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = props => {
  const { dialogsPage, profilePage } = props.state;
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => <Profile state={profilePage} addPost={props.addPost} />}
        />
        <Route path="/dialogs" render={() => <Dialogs state={dialogsPage} />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
