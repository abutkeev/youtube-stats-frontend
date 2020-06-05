import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

import StatisticsBlock from './StatisticsBlock';
import ChannelTooltip from './ChannelTooltip';

const useStyles = makeStyles((theme) =>
    createStyles({
        large: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
    }),
);

export default (props) => {
    const classes = useStyles();
    const { id, title, description, customUrl, publishedAt, statistics, thumbnails } = props
    const avatar_url = thumbnails.medium.url

    return (
        <Box p={1} bgcolor='background.paper' flexWrap='nowrap' display='flex'>
            <Box m={1}>
                <Avatar src={avatar_url} className={classes.large} />
            </Box>
            <Box>
                <Typography variant='h6'>
                    {title}
                    <Tooltip title={<ChannelTooltip {...props} />}>
                        <InfoIcon />
                    </Tooltip>
                </Typography>
                <StatisticsBlock {...props.statistics} />
                <Button component={RouterLink} to={'/channel/' + id + '/stats'}>Статистика</Button>
                <Button component={RouterLink} to={'/channel/' + id + '/videos'}>Видео</Button>
            </Box>
        </Box>
    );
}
