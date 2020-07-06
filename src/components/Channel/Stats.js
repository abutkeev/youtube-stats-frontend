import React from 'react';
import _ from 'underscore';
// import Grid from '@material-ui/core/Grid';

import ee, { EventTypes } from '../../events/eventEmitter';
import Api from '../../api';
import LineChart from '../Charts/LineChart';

class Stats extends React.Component {
    state = {
        loading: true,
        channel_id: this.props.match.params.id,
        data: [],
    }

    async componentDidMount() {
        ee.emit(EventTypes.SET_TITLE, 'статистика')
        const response = await Api.call('channel/' + this.state.channel_id + '/statistics')
        this.setState({
            loading: false,
            data: response
        })
    }

    componentWillUnmount() {
        ee.emit(EventTypes.SET_TITLE, '')
    }

    shouldComponentUpdate(nextProp, nextState) {
        return !(_.isEqual(nextProp, this.props) && _.isEqual(nextState, this.state));
    }

    render() {
        return (
            this.state.loading ? null :
                <LineChart data={this.state.data} columns={['viewCount',
                 'subscriberCount', 'videoCount'
                ]}/> 
            )
    }
}

export default Stats