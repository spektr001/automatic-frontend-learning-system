import React, { useEffect } from 'react';
import { WOW } from 'wowjs'
import clsObj from './main.module.scss'

export function MotivationBlock(props) {

    useEffect(() => {
        const wow = new WOW({ live: false })
        wow.init()
    })

        return (
            <div className={props.blockType !== 'title' ? clsObj.motiv__Block + props.animation : clsObj.motiv__Block_title + props.animation} 
                 data-wow-duration={props.animtime}>
                <h1 className={props.textType !== 'latin' ? clsObj.motiv__txt : clsObj.motiv__txt_latin}>{props.text}</h1>
            </div>
        );
}