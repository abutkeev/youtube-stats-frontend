import React from 'react';
import _ from 'underscore';
import Grid from '@material-ui/core/Grid';

import Api from '../../../api/Api';
import VideoCard from './VideoCard/VideoCard'

class VideoList extends React.Component {
    state = {
        loading: true,
        channel_id: this.props.match.params.id,
        videos: [],
    }

    async componentDidMount() {
        const response = await Api.call('channel/' + this.state.channel_id + '/video')
        this.setState({
            loading: false,
            videos: Object.values(response.videos)
        })
    }

    shouldComponentUpdate(nextProp, nextState) {
        return !(_.isEqual(nextProp, this.props) && _.isEqual(nextState, this.state));
    }

    render() {
        // console.log(this.props)
        return (
            <Grid container spacing={1}>
                {
                    this.state.videos.map((video) => (
                        <Grid key={video.id} item xs={12} sm={6} md={4} lg={3}>
                            <VideoCard {...video}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    }
}

export default VideoList