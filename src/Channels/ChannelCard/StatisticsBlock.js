import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import VisibilityIcon from '@material-ui/icons/Visibility';
import YouTubeIcon from '@material-ui/icons/YouTube';

import StatisticsItem from '../../components/StatisticsItem';

const useStyles = makeStyles((theme) =>
    createStyles({
        toolbar: {
            minHeight: 'auto',
            height: 'auto',
        },
    }),
);

function StatisticsBlock(props) {
    const classes = useStyles();
    const { subscriberCount, videoCount, viewCount } = props
    return (
        <Toolbar className={classes.toolbar} disableGutters>
            <StatisticsItem icon={PeopleIcon} value={subscriberCount} />
            <StatisticsItem icon={VisibilityIcon} value={viewCount} />
            <StatisticsItem icon={YouTubeIcon} value={videoCount} />
        </Toolbar>
    )
}

export default StatisticsBlock