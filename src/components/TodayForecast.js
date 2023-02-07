import React from "react";
import { useSelector } from "react-redux";


const Today = ({props}) => {
    const list = [];
    const totalPage = useSelector(state => state.currentPage); 

    props.forEach(item => {
        list.push(listItem(item[0], item[1], item[2]))
    })
    return(
        <div className={(totalPage === 'Cities') ? "forecast forecast-city" : 'forecast'}>
            <h3 id = {(totalPage === 'Cities') ? "todayh3" : null}>TODAY'S FORECAST</h3>
            <div className="forecast_wrapper">
                {list}
            </div>
        </div>
    )
}

function listItem (time, temp, src, key) {

    return(
        <>
            <div className="forecast_item" key={key}>
                <div className="forecast_time">{time} AM</div>
                <img src={src} alt="status"/>
                <div className="forecast_temperature">{temp}&#176;</div>
            </div>
            <div className="divider"></div>
        </>
    )
}

export default Today