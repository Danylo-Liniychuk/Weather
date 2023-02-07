import React from "react";
import { useSelector } from "react-redux";


const Week = ({props}) => {
    const arr = [];
    const totalPage = useSelector(state => state.currentPage)

    props.forEach(item => {
        arr.push(listItem(item[0], item[1], item[2], item[3]))
    })
    
    return (
        <article className={(totalPage === 'Cities') ? 'weekForecast weekForecast-city': 'weekForecast'}>
            <div className={(totalPage === 'Cities') ? 'weekForecast_wrapper weekForecast_wrapper-city': 'weekForecast_wrapper'}>
                <div className="weekForecast_title"><h3>{(totalPage === 'Cities') ? '3-DAY FORECAST': '7-DAY FORECAST'}</h3></div>
                {arr}
            </div>
        </article>
    )
}

function listItem (day, img, maxTemp, minTemp) {
    return (
        <>
            <div className="weekForecast_item">
                <div className='weekForecast_day'>{day}</div>
                <div className="weekForecast_status">
                    <img src={img} alt="status"/>
                    Sunny
                </div>
                <div className="weekForecast_temp"><span>{maxTemp}</span>/{minTemp}</div>
            </div>
            <div className="divider-horizont"></div>
        </>
    )
}
export default Week