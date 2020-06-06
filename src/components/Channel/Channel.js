import React from 'react';
import { Route, Switch } from 'react-router';
import _ from 'underscore';
import Box from '@material-ui/core/Box';

import VideoList from './VideoList/VideoList';

class Channel extends React.Component {
    state = {
        id: this.props.match.params.id
    }

    shouldComponentUpdate(nextProp, nextState) {
        return !(_.isEqual(nextProp, this.props) && _.isEqual(nextState, this.state));
    }

    render() {
        // console.log(this.props)
        const { path } = this.props.match
        return (
            <React.Fragment>
                <Box bgcolor='background.paper' flexWrap='nowrap' display='flex' p={1} m={1} borderRadius={5}>
                    Channel ID: {this.state.id}
                </Box>
                <Switch>
                    <Route path={path + 'videos'} component={VideoList} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Channel