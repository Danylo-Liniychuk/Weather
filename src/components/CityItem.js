import React from "react";
import sunny from '../assets/icons/sunny.svg' 
import { useSelector } from "react-redux";

const City = ({props}) => {
    const {name, time, temp} = props;
    const totalPage = useSelector(state => state.currentPage);
    return(
        <div className={(totalPage === 'Map') ? "city_item city_item-map" : "city_item"}>
            <div className="city_info">
                <img src={sunny} alt="status" />
                <div> {name}
                      <h3>{time}</h3>
                </div>

            </div>
            <div className="city_temp">{temp}&#176;</div>
        </div>
    )
}


export default City;