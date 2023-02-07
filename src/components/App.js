import React from "react";
import Nav from "./Navigation";
import WeatherPage from "../pages/WeatherPage";
import Cities from "../pages/CitiesPage";
import { useSelector } from "react-redux";
import "../style/style.scss";

const App = () => {
    const selectPage = useSelector((state) => state.currentPage);

    return (
        <div className="App">
            <Nav/>
            {(selectPage === 'Weather') ? <WeatherPage/>: null}
            {(selectPage === 'Cities') ? <Cities/>: null}
        </div>
    )
}

export default App