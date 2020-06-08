import React from 'react';
import { Route, Switch } from 'react-router';
import _ from 'underscore';
import Box from '@material-ui/core/Box';
import Api from '../../api'

import ee, { EventTypes } from '../../events/eventEmitter';
import VideoHeader from './VideoHeader';

class Video extends React.Component {
    state = {
        id: this.props.match.params.id,
        loading: true,
        info: {},
    }

    async componentDidMount() {
        if (this.props.match.isExact) {
            ee.emit(EventTypes.SET_TITLE, 'Видео')
            ee.emit(EventTypes.SET_TITLE_PREFIX, '')
        } else {
            ee.emit(EventTypes.SET_TITLE_PREFIX, '')
        }
        const response = await Api.call('video/' + this.state.id)
        this.setState({
            loading: false,
            info: response,
        })
    }

    componentDidUpdate() {
        if (this.state.loading) {
            if (this.props.match.isExact) {
                ee.emit(EventTypes.SET_TITLE, 'Видео')
                ee.emit(EventTypes.SET_TITLE_PREFIX, '')
            } else {
                ee.emit(EventTypes.SET_TITLE_PREFIX, '')
            }
        } else {
            if (this.props.match.isExact) {
                ee.emit(EventTypes.SET_TITLE, this.state.info.title)
                ee.emit(EventTypes.SET_TITLE_PREFIX, '')
            } else {
                ee.emit(EventTypes.SET_TITLE_PREFIX, this.state.info.title)
            }
        }
    }

    componentWillUnmount() {
        ee.emit(EventTypes.SET_TITLE, '')
        ee.emit(EventTypes.SET_TITLE_PREFIX, '')
    }

    shouldComponentUpdate(nextProp, nextState) {
        return !(_.isEqual(nextProp, this.props) && _.isEqual(nextState, this.state));
    }

    render() {
        const { path } = this.props.match
        return (
            this.state.loading ? null :
                <React.Fragment>
                    <Box bgcolor='background.paper' flexWrap='nowrap' display='flex' p={1} m={1} borderRadius={5}>
                        <VideoHeader {...this.state.info} />
                    </Box>
                    <Switch>
                        {/* <Route path={path + 'stats'} component={Stats} /> */}
                    </Switch>
                </React.Fragment>
        )
    }
}

export default Video