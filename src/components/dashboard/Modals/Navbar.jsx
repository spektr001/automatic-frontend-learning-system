import React from 'react';
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import { SwipeableDrawer, List, ListItem, ListItemText, Divider, Box, makeStyles } from '@material-ui/core'
import langSwitcher from '../../languageSwitcher';
import arrowUp from '../../../assets/images/arrow-up.png'

const useStyles = makeStyles({
    nav_Block: {
        width: '8em',
        fontFamily: '"DotGothic16", sans-serif',
        fontSize: '20px',
        overflowX: 'hidden'
    },

    nav__topBtn: {
        color: '#308446',
        cursor: 'pointer'
    },

    nav__topBtn_img: {
        width: '50px',
        height: '50px'
    },

    nav__title: {
        color: '#00008b',
    },

    nav__item: {
        textDecoration: 'none',
        '&:hover': {
            color: '#00008b',
        },
        '&:active': {
            color: '#000',
            textDecoration: 'underline'
        },
        '&:visited': {
            color: '#308446',
            backgroundColor: '#00008b'
        }
    },
})

export function Navbar(props) {

    const cls = useStyles()

    const handleClick = () => { props.updateState(false) }

    const handleClickTop = () => {
        props.updateState(false)
        scroll.scrollToTop()
    }


    return (
        <>
            <SwipeableDrawer
                anchor="left"
                open={props.navState}
                onClose={() => { props.updateState(false) }}
                onOpen={() => { }}
            >
                <>
                    <Box className={cls.nav__topBtn} textAlign="center" p={2} onClick={handleClickTop}>
                        <img className={cls.nav__topBtn_img} src={arrowUp} alt="arrow-up" />
                    </Box>
                    <Divider />
                    <List className={cls.nav_Block}>
                        <Link className={cls.nav__item} to='/dashboard/begining'><ListItem alignItems='center' button onClick={handleClick}>
                            <ListItemText primary={langSwitcher("Begining", "Початок")} />
                        </ListItem></Link>
                        <Box className={cls.nav__title} textAlign="left" p={2}>
                            HTML
                    </Box>
                        <ListItem className={cls.nav__item} alignItems='center' button onClick={handleClick}>
                            <Link className={cls.nav__item} to='/dashboard/HTML/lesson1'><ListItemText primary={langSwitcher("What is it HTML?", "Що таке HTML?")} /></Link>
                        </ListItem>
                        <ListItem className={cls.nav__item} alignItems='center' button onClick={handleClick}>
                            <Link className={cls.nav__item} to='/dashboard/HTML/lesson2'><ListItemText primary={langSwitcher("Basic tags", "Основні теги")} /></Link>
                        </ListItem>
                        <ListItem className={cls.nav__item} alignItems='center' button onClick={handleClick}>
                            <Link className={cls.nav__item} to='/dashboard/HTML/lesson3'><ListItemText primary={langSwitcher("Other tags", "Інші теги")} /></Link>
                        </ListItem>
                        <ListItem className={cls.nav__item} alignItems='center' button onClick={handleClick}>
                            <Link className={cls.nav__item} to='/dashboard/HTML/lesson4'><ListItemText primary={langSwitcher("Attributes", "Атрибути")} /></Link>
                        </ListItem>
                        <Box className={cls.nav__title} textAlign="left" p={2}>
                            CSS
                    </Box>
                        <ListItem className={cls.nav__item} alignItems='center' button onClick={handleClick}>
                            <Link className={cls.nav__item} to='/dashboard/CSS/lesson1'><ListItemText primary={langSwitcher("What is it CSS?", "Що таке CSS?")} /></Link>
                        </ListItem>
                        <ListItem className={cls.nav__item} alignItems='center' button onClick={handleClick}>
                            <Link className={cls.nav__item} to='/dashboard/CSS/lesson2'><ListItemText primary={langSwitcher("Selectors", "Селектори")} /></Link>
                        </ListItem>
                        <ListItem className={cls.nav__item} alignItems='center' button onClick={handleClick}>
                            <Link className={cls.nav__item} to='/dashboard/CSS/lesson3'><ListItemText primary={langSwitcher("Pseudo-classes", "Псевдокласи")} /></Link>
                        </ListItem>
                        <ListItem className={cls.nav__item} alignItems='center' button onClick={handleClick}>
                            <Link className={cls.nav__item} to='/dashboard/CSS/lesson4'><ListItemText primary={langSwitcher("Basic properties", "Основні властивості")} /></Link>
                        </ListItem>
                        <Box className={cls.nav__title} textAlign="left" p={2}>
                            JavaScript
                    </Box>
                    </List>
                </>
            </SwipeableDrawer>
        </>
    );
}