import React from 'react';
import "./index.scss";

import { LeftSide } from "./leftSide.js";
import { RightSide } from "./rightSide.js";
import { connect } from 'react-redux';

export const Container1 = ({ skinOnof }) =>{
    return (
        <div className='wrap' style={{ backgroundColor: skinOnof === "Dark" ? 'rgb(145, 139, 99)' : 'blanchedalmond'}}>
            <div className='left-side'>
                <LeftSide />
            </div>
            <div className='right-side'>
                <RightSide />
            </div>
        </div>
    )
}
const mapStateToPropsCR = (state) =>(
    { skinOnof: state.ToggleSkin }
)
export const Container = connect(mapStateToPropsCR)(Container1);
