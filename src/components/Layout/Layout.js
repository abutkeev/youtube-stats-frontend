import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';

import { AppHeader } from './Header'

export default props => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    // console.log(prefersDarkMode)
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid container direction='column' spacing={1}>
                <Grid item>
                    <AppHeader />
                </Grid>
                <Grid item container>
                    {props.children}
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}