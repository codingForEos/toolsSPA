import React from 'react';
import "./index.scss";

import { LeftSide } from "./leftSide.js";
import { RightSide } from "./rightSide.js";
export default class Container extends React.Component{

    render(){
        return(
            <div className='wrap'>
                <div className='left-side'>
                    <LeftSide/>
                </div>
                <div className='right-side'>
                    <RightSide/>
                </div>
            </div>
        )
    }
}