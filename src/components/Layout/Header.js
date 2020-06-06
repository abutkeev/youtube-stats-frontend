import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const AppHeader = () => {
    return (
        <React.Fragment>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant='h5'>
                        Header
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </React.Fragment>
    )
}