import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import VisibilityIcon from '@material-ui/icons/Visibility';
import YouTubeIcon from '@material-ui/icons/YouTube';

import StatisticsItem from '../../components/StatisticsItem';

function StatisticsBlock(props) {
    const { subscriberCount, videoCount, viewCount } = props
    return (
        <Box display='flex' flexWrap='nowrap'>
            <StatisticsItem icon={PeopleIcon} value={subscriberCount} />
            <StatisticsItem icon={VisibilityIcon} value={viewCount} />
            <StatisticsItem icon={YouTubeIcon} value={videoCount} />
        </Box>
    )
}

export default StatisticsBlock