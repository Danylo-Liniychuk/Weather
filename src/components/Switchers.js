import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeToggle } from "../reducers/mainSlice";

const Switchers = () => {
    const toggle = useSelector(state => state.settings.toggle);
    const {notifications, time, location} = toggle;
    const dispatch = useDispatch();

    return (
        <>
            <div className="notifications">
                <h2>Notifications</h2>
                <div className="notifications_wrapper">
                    <div className="notifications_text">
                        Notifications<br/><span>Be aware of the weather</span>
                    </div>
                    <label className={(notifications) ? "toggle toggle-active" : "toggle"}>
                        <input type="checkbox"
                               checked={notifications}
                               onChange={() => dispatch(changeToggle({name:'notifications',
                                                                      value: !notifications}))}
                               name="notifications"/>
                        <div></div>
                    </label>
                </div>
            </div>
            
            <div className="general">
                <h2>General</h2>
                <div className="general_wrapper">
                    <div className="general_item">
                        <div className="general_text">
                            12-Hours Time
                        </div>
                        <label className={(time) ? "toggle toggle-active" : "toggle"}>
                            <input type="checkbox"
                                   checked={time}
                                   onChange={() => dispatch(changeToggle({name:'time', value: !time}))}
                                   name="time"/>
                            <div></div>
                        </label>
                    </div>
                    <div className="general_divider"></div>
                    <div className="general_item">
                        <div className="general_text">
                            Location<br/><span>Get weather of tour location</span>
                        </div>
                        <label className={(location) ? "toggle toggle-active" : "toggle"}>
                            <input type="checkbox"
                                   checked={location}
                                   onChange={() => dispatch(changeToggle({name:'location', value: !location}))}
                                   name="location"/>
                            <div></div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Switchers