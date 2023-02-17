import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeDistance, changeSpeed, changePressure, changeTemperature, changePrecipitation } from "../reducers/mainSlice";


const Units = () => {
    const settings = useSelector(state => state.settings);
    const {temperature,
           speed,
           pressure,
           precipitation,
           distance} = settings;

    const dispatch = useDispatch();


    return (
        <>
            <h2>Units</h2>
            <div className="settings_units">
                <div className="settings_item">
                    <h3>Temperature</h3>
                    <SettingItems dispatch={dispatch}
                                    action={changeTemperature}
                                    data={[{name:'Celsius', val: 'celsius'},
                                            {name:'Fahrenheit', val: 'fahrenheit'}]}
                                    total={temperature}
                                    name={'temperature'}/>

                </div>
                <div className="settings_item">
                    <h3>Wind Speed</h3>
                    <SettingItems  dispatch={dispatch}
                                   action={changeSpeed}
                                   data={[{name:'km/h', val: 'km/h'},
                                            {name:'m/s', val: 'm/s'},
                                            {name:'Knots', val: 'Knots'}]}
                                   total={speed}
                                   name={'speed'}/>
                </div>
                <div className="settings_item">
                    <h3>Pressure</h3>
                    <SettingItems   dispatch={dispatch}
                                    action={changePressure}
                                    data={[ {name:'hPa', val: 'hPa'},
                                            {name:'Inches', val: 'inch'},
                                            {name:'kPa', val: 'kPas'},
                                            {name:'mm', val: 'mm'}]}
                                    total={pressure}
                                    name={'pressure'}/>
                </div>
                <div className="settings_item">
                    <h3>Precipitation</h3>
                    <SettingItems dispatch={dispatch}
                                  action={changePrecipitation}
                                  data={[ {name:'Millimeters', val: 'mm'},
                                          {name:'Inches', val: 'inch'}]}
                                  total={precipitation}
                                  name={'Precipitation'}/>
                </div>
                <div className="settings_item">
                    <h3>Distance</h3>
                    <SettingItems dispatch={dispatch}
                                        action={changeDistance}
                                        data={[ {name:'Kilometers', val: 'km'},
                                                {name:'Miles', val: 'miles'}]}
                                        total={distance}
                                        name={'distance'}/>
                </div>
            </div>
        </>
    )
}

const SettingItems = ({dispatch, action, data, total, name}) => {
    const inputs = [];

    const statusChecker = (type, value) => {
        if(type === value){
            return true
        }
        return false
    }

    data.forEach((item, index) => {
        const input = <input label={item.name}
                             checked={statusChecker(total, item.val)}
                             key={index}
                             name ={name}
                             type='radio'
                             onChange={() => dispatch(action(item.val))}/>;
        inputs.push(input)
    });
    return(
        <div className="settings_switch">
            {inputs}
        </div>
    )
}

export default Units