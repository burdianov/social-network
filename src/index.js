import "./index.css";
import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SamuraiJSApp from "./App";

ReactDOM.render(
    <SamuraiJSApp/>,
    document.getElementById("root")
);

serviceWorker.unregister();
