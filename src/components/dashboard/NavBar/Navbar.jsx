import React, { useState } from 'react';
import { SwipeableDrawer, List, ListItem, ListItemText, Divider, Box } from '@material-ui/core'

export function Navbar(props) {

const [open, setOpen] = useState(false)

    return (
        <>
         {setOpen(props.openNav)}
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