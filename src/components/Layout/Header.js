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

    set_state(key, value) {
        this.setState(Object.fromEntries([[key, value]]))
    }

    add_state_listener(event, key) {
        const listener = this.set_state.bind(this, key)
        ee.on(event, listener)
        this.listeners[event] = listener
    }

    componentDidMount() {
        this.add_state_listener(EventTypes.SET_TITLE, 'title')
        this.add_state_listener(EventTypes.SET_TITLE_PREFIX, 'title_prefix')
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