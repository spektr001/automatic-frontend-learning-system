import React, { useState } from 'react';
import {animateScroll as scroll} from 'react-scroll'
import clsObj from './header.module.scss'
import { LogInBtn } from './LogInBtn';
import { UserBtn } from './UserBtn';
import { SwipeableDrawer, List, ListItem, ListItemText, Divider, Box } from '@material-ui/core'
/* import { Navbar } from '../../dashboard/NavBar/Navbar' */


export function Header() {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        if (localStorage.name === "") {
            scroll.scrollToTop()        
        }else{
            setOpen(true)
        }
      }

        return (
            <>
            <header className={clsObj.header__Block}>
                <div className={clsObj.headerLogo__Block}>
                    <a className={clsObj.logoLink__btn} onClick={handleClick}>
                        <img alt="Logo" className={clsObj.logoLink__img} />
                    </a>
                    <span className={clsObj.headerTitle__txt}>FrontEndBox</span>
                </div>
                {localStorage.name === "" ? <LogInBtn /> : <UserBtn />} 
            </header>

            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => {setOpen(false)}}
                onOpen={() => {}}
            >
                <>
                    <Box textAlign="center" p={2}>
                        Components
                    </Box>
                    <Divider />
                    <List>
                        <ListItem button onClick={() => {}}>
                            <ListItemText primary={'Container'} />
                        </ListItem>
                        <ListItem button onClick={() => {}}>
                            <ListItemText primary={'Grid'} />
                        </ListItem>
                        <ListItem button onClick={() => {}}>
                            <ListItemText primary={'Box'} />
                        </ListItem>
                    </List>
                </>
            </SwipeableDrawer>
        </>
        );
}