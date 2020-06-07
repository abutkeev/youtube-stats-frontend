import React from 'react';
import { withRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

class AppHeader extends React.Component {
    state = {
        title: 'Home page',
    }

    render() {
        const title = this.state.title
        const isHomePage = this.props.location.pathname === '/'
        document.title = title
        return (
            <React.Fragment>
                <AppBar position='fixed'>
                    <Toolbar>
                        <IconButton disabled={isHomePage} edge='start' component={RouterLink} to='/'><HomeIcon /></IconButton>
                        <Typography variant='h5'>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </React.Fragment>
        )
    }
}

export default withRouter(AppHeader)