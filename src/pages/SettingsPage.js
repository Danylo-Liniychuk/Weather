import React from "react";
import Units from "../components/Units";
import Switchers from "../components/Switchers";
import Advertising from "../components/Advertising";


const SettingsPage = () => {

    return(
        <>
            <div className="contentBox contentBox-withoutJC">
                <div className="search">
                    <input type="text" placeholder="Search for cities"/>
                </div>
                <div className="settings_wrapper">
                    <Units/>
                    <Switchers/>
                </div>
            </div>
            <Advertising/>
        </>
    )
}

export default SettingsPage;