import React, {useEffect, Suspense} from "react";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import store from './redux/redux-store';
import withSuspense from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

const App = ({initializeApp, initialized}) => {
    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    return !initialized ? (
        <Preloader/>
    ) : (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?"
                       render={withSuspense(ProfileContainer)
                       }/>
                <Route path="/dialogs" render={withSuspense(DialogsContainer)
                }/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <LoginPage/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route exact path="/settings" component={Settings}/>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(
        mapStateToProps,
        {initializeApp}
    )
)(App);

const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
};

export default SamuraiJSApp;
