import React, { Component } from 'react';
import { WOW } from 'wowjs'
import clsObj from './main.module.scss'

export class MotivationBlock extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const wow = new WOW({ live: false })
        wow.init()
    }

    render() {
        return (
            <div className={this.props.blockType !== 'title' ? clsObj.motiv__Block + this.props.animation : clsObj.motiv__Block_title + this.props.animation} 
                 data-wow-duration={this.props.animtime}>
                <h1 className={this.props.textType !== 'latin' ? clsObj.motiv__txt : clsObj.motiv__txt_latin}>{this.props.text}</h1>
            </div>
        );
    }
}