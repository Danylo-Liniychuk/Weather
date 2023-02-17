import React from "react";
import {ReactComponent as Cities} from '../assets/navigation/list_icon.svg';
import {ReactComponent as Map} from '../assets/navigation/map_icon.svg';
import {ReactComponent as Settings} from '../assets/navigation/settings_icon.svg';
import {ReactComponent as Weather} from '../assets/navigation/weather_icon.svg';
import logo from '../assets/logo.svg';
import { changeCurrentPage } from "../reducers/mainSlice";
import { useDispatch, useSelector} from "react-redux";

const Nav = () => {
    const data = [[Weather, 'Weather'],
                  [Cities, 'Cities'],
                  [Map, 'Map'],
                  [Settings, 'Settings']];
    const items = [];
    const dispatch = useDispatch();
    const totalPage = useSelector(state => state.currentPage);

    const totalPageChecker = (text) => {
        if(text === totalPage) {
            if(text === 'Map'){
                return 'navigation_image navigation_image-activeNoFill'
                
            }
            return 'navigation_image navigation_image-active';
        } else {
            return 'navigation_image'
        }
    }

    const liCreator = (Img, text, key) => {
        return (
            <div className={(text === totalPage) ? "navigation_item navigation_item-active" : "navigation_item"} 
                 key={key} 
                 onClick={() => dispatch(changeCurrentPage(text))}>
                    
                <Img className={totalPageChecker(text)}
                     fill={(text === 'Weather') ? '#A29993' : 'none'}/>
                <div>{text}</div>
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