import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Thumbnail from '../Channel/VideoList/VideoCard/Thumbnail';
import Info from '../Channel/VideoList/VideoCard/Info';
import Statistics from '../Channel/VideoList/VideoCard/Statistics';
import Buttons from '../Channel/VideoList/VideoCard/Buttons';

function VideoHeader(props) {
    const { id, title, description, publishedAt, statistics, thumbnails } = props
    return (
        <Box display='flex'>
            <Box p={1}>
                <Button startIcon={<ArrowBackIosIcon />} component={RouterLink} to={'/channel/' + props.channelId + '/videos'}>
                    Все видео канала
                </Button>
                <Info {...{ title, description, publishedAt }} />
                <Statistics {...statistics} />
                <Buttons {...{ id }} />
            </Box>
            <Box p={1}>
                <Thumbnail {...thumbnails} />
            </Box>
        </Box>
    )
}

export default VideoHeader