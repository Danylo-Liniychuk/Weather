import React from "react";
import Total from "./Total";
import Today from "./TodayForecast";
import Week from "./WeekForecast";
import sunny from '../assets/icons/sunny.svg';



const CityForecast = () => {
    const arr = [['6:00', '25', sunny],
                 ['6:00', '25', sunny],
                 ['6:00', '25', sunny]]

    const weakArr = [['Today', sunny, 36, 22],
                    ['Today', sunny, 36, 22],
                    ['Today', sunny, 36, 22]] 
    return(
        <div className="cityForecast">
            <div className="cityForecast_wrapper">
                <Total/>
                <div className="divider-city"></div>
                <Today props={arr}/>
                <div className="divider-city"></div>
                <Week props={weakArr}/>
            </div>
        </div>
    )
}

export default CityForecast;