import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import InitForm from "./components/InitForm";
import PanelOne from "./components/PanelOne";
import PanelTwo from "./components/PanelTwo";
import PanelThree from "./components/PanelThree";

import ReactPageScroller from "react-page-scroller";

const App = () => {
    return (
        <Fragment>
            <div className="container">
                <Header />
                <InitForm />
            </div>
            <ReactPageScroller ref={c => (this.reactPageScroller = c)}>
                <PanelOne />
                <PanelTwo />
                <PanelThree />
            </ReactPageScroller>
        </Fragment>
    );
};

export default App;
