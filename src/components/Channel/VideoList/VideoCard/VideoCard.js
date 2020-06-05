import React from 'react';
import Box from '@material-ui/core/Box';

import Thumbnail from './Thumbnail';
import Title from './Title';
import Time from './Time';
import Statistics from './Statistics';
import Buttons from './Buttons';

function VideoCard(props) {
    const { id, title, description, publishedAt, statistics, thumbnails } = props
    return (
        <Box p={1} bgcolor='background.paper'>
            <Thumbnail {...thumbnails}/>
            <Title {...{title, description}}/>
            <Time time={publishedAt}/>
            <Statistics {...statistics}/>
            <Buttons {...{id}}/>
        </Box>
    )
}

export default VideoCard