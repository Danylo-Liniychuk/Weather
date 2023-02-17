import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentPage: 'Weather',
    cities: [{name: "Madrid", time: '10:23', temp: '31'},
             {name: "Madrid", time: '10:23', temp: '31'},
             {name: "Madrid", time: '10:23', temp: '31'},
             {name: "Madrid", time: '10:23', temp: '31'},
             {name: "Madrid", time: '10:23', temp: '31'}],

    map: {coords: {latitude: 50.4762467, longitude: 30.5081722}, 
          zoom: 10,
          markers: []},

    settings: { temperature: 'celsius',
                speed: 'km/h',
                pressure: 'mm',
                precipitation:'mm',
                distance: 'km',
                toggle: {
                    notifications: false,
                    time: true,
                    location: false
                }
    }
}


const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers : {
        changeCurrentPage : (state, action) => {
            state.currentPage = action.payload;
        },
        changeCoords: (state, action) => {
            state.map.coords.latitude = action.payload.latitude;
            state.map.coords.longitude = action.payload.longitude;
        },
        addMarker: (state, action) => {
            state.map.markers = [...state.map.markers, action.payload]
        },
        changeTemperature: (state, action) => {
            state.settings.temperature = action.payload;
        },
        changeSpeed: (state, action) => {
            state.settings.speed = action.payload;
        },
        changePressure: (state, action) => {
            state.settings.pressure = action.payload;
        },
        changePrecipitation: (state, action) => {
            state.settings.precipitation = action.payload;
        },
        changeDistance: (state, action) => {
            state.settings.distance = action.payload;
        },
        changeToggle: (state, action) => {
            state.settings.toggle[action.payload.name] = action.payload.value
        }
        
    }
})

const {actions, reducer} = mainSlice;

export default reducer;

export const {changeCurrentPage,
              changeCoords,
              addMarker,
              changeTemperature,
              changePrecipitation,
              changeSpeed,
              changePressure,
              changeDistance,
              changeToggle} =  actions;
