import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

export const AppHeader = () => {
    return (
        <React.Fragment>
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton edge='start' component={RouterLink} to='/'><HomeIcon/></IconButton>
                    <Typography variant='h5'>
                        Header
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </React.Fragment>
    )
}