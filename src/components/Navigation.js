import React from "react";
import list from '../assets/navigation/list_icon.svg';
import map from '../assets/navigation/map_icon.svg';
import settings from '../assets/navigation/settings_icon.svg';
import weather from '../assets/navigation/weather_icon.svg';
import logo from '../assets/logo.svg';
import { changeCurrentPage } from "../reducers/mainSlice";
import { useDispatch, useSelector} from "react-redux";

const Nav = () => {
    const data = [[weather, 'Weather'],
                  [list, 'Cities'],
                  [map, 'Map'],
                  [settings, 'Settings']];
    const items = [];
    const dispatch = useDispatch();
    const totalPage = useSelector(state => state.changeCurrentPage);

    const liCreator = (img, text, key) => {
        return (
            <div className="navigation_item" key={key} onClick={() => dispatch(changeCurrentPage(text))}>
                <img src={img} alt="weather"/>
                <div className="navigation_prop">{text}</div>
            </div>
        )
    }

    data.forEach((item, index) => {
        items.push(liCreator(item[0], item[1], index));
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

export default Nav;