import React from "react";
import Total from '../components/Total';
import Today from "../components/TodayForecast";
import AirCondition from "../components/AirCondition";
import Week from "../components/WeekForecast";
import sunny from '../assets/icons/sunny.svg';

const WeatherPage = () => {
    const arrToday = [['6:00', '25', sunny],
                      ['6:00', '25', sunny],
                      ['6:00', '25', sunny],
                      ['6:00', '25', sunny],
                      ['6:00', '25', sunny],
                      ['6:00', '25', sunny]];

    const weakArr = [['Today', sunny, 36, 22],
                     ['Today', sunny, 36, 22],
                     ['Today', sunny, 36, 22],
                     ['Today', sunny, 36, 22],
                     ['Today', sunny, 36, 22],
                     ['Today', sunny, 36, 22],
                     ['Today', sunny, 36, 22]] 
    return(
        <>
            <div className="contentBox">
                <div className="search">
                    <input type="text" placeholder="Search for cities"/>
                </div>
                <Total/>
                <Today props={arrToday}/>
                <AirCondition/>
            </div>
            <Week props={weakArr}/>
        </>
    )
}

export default WeatherPage;