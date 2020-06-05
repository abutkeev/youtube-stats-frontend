import React from 'react';
import Box from '@material-ui/core/Box';
import Visibility from '@material-ui/icons/Visibility';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import Comment from '@material-ui/icons/Comment';

import StatisticsItem from '../../../StatisticsItem';

function Statistics(props) {
    const {viewCount, likeCount, dislikeCount, commentCount} = props

    return (
        <Box display='flex' flexWrap='wrap'>
            <StatisticsItem icon={Visibility} value={viewCount}/>
            <StatisticsItem icon={ThumbUp} value={likeCount} />
            <StatisticsItem icon={ThumbDown} value={dislikeCount} />
            <StatisticsItem icon={Comment} value={commentCount} />
        </Box>
    )
}

export default Statistics