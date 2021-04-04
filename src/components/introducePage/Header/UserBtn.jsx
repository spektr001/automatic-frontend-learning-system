import React from 'react';
/* import clsObj from './header.module.scss'
import User from '../../../assets/images/user.png' */
import { Dropdown, DropdownButton } from 'react-bootstrap';

export function UserBtn() {
        return ( 
                    <DropdownButton id="dropdown-basic-button" title={localStorage.name}>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
         );
}