import React from "react";
import Total from './Total';
import Today from "./TodayForecast";

const Content = () => {


    return (
        <div className="contentBox">
            <div className="search">
                <input type="text" placeholder="Search for cities"/>
            </div>
            <Total/>
            <Today/>
        </div>
    )
}

export default Content