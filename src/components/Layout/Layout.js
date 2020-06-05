import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

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
            <AppHeader />
            <Box m={1}>
                {props.children}
            </Box>
        </ThemeProvider >
    )
}