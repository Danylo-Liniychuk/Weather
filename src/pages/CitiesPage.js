import React from "react";
import City from "../components/CityItem";
import { useSelector } from "react-redux";
import CityForecast from "../components/CityForecast";


const Cities = () => {
    const cities = useSelector((state) => state.cities);
    const itemArr = [];

    cities.forEach(item => {
        itemArr.push(<City props={item}/>);
    })
    return (
        <>
            <div className="contentBox contentBox-withoutJC">
                <div className="search">
                    <input type="text" placeholder="Search for cities"/>
                </div>
                <div className="city_wrapper">
                    {itemArr}
                </div>
            </div>
            <CityForecast/>
        </>

    )
}

export default Cities;