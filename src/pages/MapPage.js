import React from "react";
import Map from "../components/Map";
import City from "../components/CityItem";
import { useSelector } from "react-redux";


const MapPage = () => {
    const cities = useSelector((state) => state.cities);
    const itemArr = [];

    cities.forEach(item => {
        itemArr.push(<City props={item}/>);
    })
    return(
        <>
            <div className="contentBox contentBox-withoutJC">
                <div className="search">
                    <input type="text" placeholder="Search for cities"/>
                </div>
                <Map/>
            </div>
            <div className="map_forecast" >
                <div className="map_wrapper">
                    {itemArr}
                </div>
            </div>
        </>
    )
}

export default MapPage