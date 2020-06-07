import React from 'react';
import { withRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import ee, { EventTypes } from '../../events/eventEmitter';

class AppHeader extends React.Component {
    state = {
        title: '',
        title_prefix: '',
    }

    listeners = {}

    set_title(title) {
        this.setState({ title })
    }

    set_title_prefix(title_prefix) {
        this.setState({ title_prefix })
    }

    componentDidMount() {
        const title_listener = this.set_title.bind(this)
        ee.on(EventTypes.SET_TITLE, title_listener)
        this.listeners[EventTypes.SET_TITLE] = title_listener

        const title_prefix_listener = this.set_title_prefix.bind(this)
        ee.on(EventTypes.SET_TITLE_PREFIX, title_prefix_listener)
        this.listeners[EventTypes.SET_TITLE_PREFIX] = title_prefix_listener
    }

    componentWillUnmount() {
        this.listeners.forEach((listener, key) => ee.removeListener(key, listener))
    }

    render() {
        const prefix = this.state.title_prefix ? this.state.title_prefix : ''
        const isHomePage = this.props.location.pathname === '/'
        let title = this.state.title ? this.state.title : ''

        if (prefix !== '') {
            if (title === '') {
                title = prefix + ': неизвестная страница'
            } else {
                title = prefix + ': ' + title.toLocaleLowerCase()
            }
        }
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