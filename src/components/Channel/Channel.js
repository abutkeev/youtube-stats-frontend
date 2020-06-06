import React from 'react';
import { Route, Switch } from 'react-router';
import _ from 'underscore';
import Box from '@material-ui/core/Box';
import Api from '../../api'

import VideoList from './VideoList/VideoList';
import ChannelCard from '../ChannelCard';

class Channel extends React.Component {
    state = {
        id: this.props.match.params.id,
        loading: true,
        info: {},
    }

    async componentDidMount() {
        const response = await Api.call('channel/' + this.state.id)
        this.setState({
            loading: false,
            info: response,
        })
    }

    shouldComponentUpdate(nextProp, nextState) {
        return !(_.isEqual(nextProp, this.props) && _.isEqual(nextState, this.state));
    }

    render() {
        const { path } = this.props.match
        return (
            this.state.loading ? null:
            <React.Fragment>
                <Box bgcolor='background.paper' flexWrap='nowrap' display='flex' p={1} m={1} borderRadius={5}>
                    <ChannelCard {...this.state.info}/>
                </Box>
                <Switch>
                    <Route path={path + 'videos'} component={VideoList} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Channel