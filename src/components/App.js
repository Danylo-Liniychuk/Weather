import React from "react";
import Nav from "./Navigation";
import Content from "./ContentBox";
import Weak from "./WeakForecast";
import "../style/style.scss"

const App = () => {

    return (
        <div className="App">
            <Nav/>
            <Content/>
            <Weak/>
        </div>
    )
}

export default App