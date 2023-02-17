import React from "react";
import L from 'leaflet'
import { MapContainer,Popup,Marker, TileLayer, useMapEvents } from 'react-leaflet'
import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCoords } from "../reducers/mainSlice";
import sunny from '../assets/marker.svg';
import { addMarker } from "../reducers/mainSlice";


const Map = () => {
    const markers = useSelector(state => state.map.markers);
    const mapProp = useSelector(state => state.map);
    const{latitude, longitude} = mapProp.coords;
    const dispatch = useDispatch();

    const myIcon = L.icon({
        iconUrl: sunny,
        iconSize: [40,40],
        iconAnchor: [20, 20],
        popupAnchor: [0,-20]
    });

    // const createPopup = (icon) => {
    //     return (
    //         <Popup>
    //             <div class="popup">
    //                 <h3>Madrid</h3>
    //                 <img src={icon} alt='status'/>
    //                 <h2>32 &#176;</h2> 
    //             </div>
    //         </Popup>

    //     )
    // }

    return (
    
        <MapContainer center={[latitude, longitude]} zoom={mapProp.zoom} minZoom={3} className='map' doubleClickZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyMap dispatch={dispatch} addMarker={addMarker} icon={myIcon}/>
      </MapContainer>
        
    )
}

function MyMap({dispatch, addMarker, icon}) {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        dblclick: (e) => {
            const {lat, lng} = e.latlng;
            console.log(lat);
            setPosition([lat, lng]);
            dispatch(addMarker([lat, lng]));
        }
    })
    console.log(position)
    return  (position === null) ? null : (
        <Marker position={position} icon={icon}>
            <Popup>
                !
            </Popup>
        </Marker>
    )
}
export default Map