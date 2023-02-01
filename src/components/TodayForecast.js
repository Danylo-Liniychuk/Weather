import React from "react";
import sunny from '../assets/icons/sunny.svg'


const Today = () => {
    const arr = ['6:00', '25', sunny ]
    const list = [];
    for (let i = 0; i < 6; i++) {
        list.push(listItem(arr[0], arr[1], arr[2]))
    }
    return(
        <div className="forecast">
            <h3>TODAY'S FORECAST</h3>
            <div className="forecast_wrapper">
                {list}
            </div>
        </div>
    )
}

function listItem (time, temp, src) {

    return(
        <>
            <div class="forecast_item">
                <div class="forecast_time">{time} AM</div>
                <img src={src} alt="status"/>
                <div class="forecast_temperature">{temp} &#176;</div>
            </div>
            <div class="divider"></div>
        </>
    )
}

export default Today