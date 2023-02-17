import React from "react";
import Nav from "./Navigation";
import WeatherPage from "../pages/WeatherPage";
import Cities from "../pages/CitiesPage";
import SettingsPage from "../pages/SettingsPage";
import MapPage from "../pages/MapPage";
import { useSelector } from "react-redux";
import "../style/style.scss";
import 'leaflet/dist/leaflet.css';

const App = () => {
    const selectPage = useSelector((state) => state.currentPage);

    return (
        <div className="App">
            <Nav/>
            {(selectPage === 'Weather') ? <WeatherPage/>: null}
            {(selectPage === 'Cities') ? <Cities/>: null}
            {(selectPage === 'Map') ? <MapPage/>: null}
            {(selectPage === 'Settings') ? <SettingsPage/>: null}
        </div>
    )
}

export default App