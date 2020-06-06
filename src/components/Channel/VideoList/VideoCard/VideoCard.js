import React from 'react';
import Box from '@material-ui/core/Box';

import Thumbnail from './Thumbnail';
import Info from './Info'
import Statistics from './Statistics';
import Buttons from './Buttons';

function VideoCard(props) {
    const { id, title, description, publishedAt, statistics, thumbnails } = props
    return (
        <Box p={1} bgcolor='background.paper' borderRadius={5}>
            <Thumbnail {...thumbnails}/>
            <Info {...{title, description, publishedAt}}/>
            <Statistics {...statistics}/>
            <Buttons {...{id}}/>
        </Box>
    )
}

export default VideoCard