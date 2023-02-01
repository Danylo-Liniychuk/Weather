import React from "react";
import list from '../assets/navigation/list_icon.svg';
import map from '../assets/navigation/map_icon.svg';
import settings from '../assets/navigation/settings_icon.svg';
import weather from '../assets/navigation/weather_icon.svg';
import logo from '../assets/logo.svg';


const Nav = () => {
    const data = [[weather, 'Weather'],
                  [list, 'Cities'],
                  [map, 'Map'],
                  [settings, 'Settings']];
    const items = [];

    data.forEach(item => {
        items.push(listItem(item[0], item[1]));
    })


    return (
        <>
            <nav className="navigation">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                {items}
            </nav>
        </>
    )
}


function listItem(img, text) {
    return (
        <div className="navigation_item">
            <img src={img} alt="weather"/>
            <div className="navigation_prop">{text}</div>
        </div>
    )
}
export default Nav;