import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import LinkIcon from '@material-ui/icons/Link';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import YouTubeIcon from '@material-ui/icons/YouTube';

import StatisticsBlock from './StatisticsBlock';
import ChannelTooltip from './ChannelTooltip';
import CopyButton from '../CopyButton';

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
    // const { id, title, description, customUrl, publishedAt, statistics, thumbnails } = props
    const { id, title, customUrl, statistics, thumbnails } = props
    const avatar_url = thumbnails.medium.url

    const url = 'https://www.youtube.com/' + (customUrl ? customUrl : 'channel/' + id)

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
                <StatisticsBlock {...statistics} />
                <Button startIcon={<EqualizerIcon/>} component={RouterLink} to={'/channel/' + id + '/stats'}>Статистика</Button>
                <Button startIcon={<YouTubeIcon/>} component={RouterLink} to={'/channel/' + id + '/videos'}>Видео</Button>
                <Tooltip title='Открыть на YouTube'>
                    <IconButton target='_blank' rel='noopener' href={url}><LinkIcon /></IconButton>
                </Tooltip>
                <CopyButton text={url} />
            </Box>
        </Box>
    );
}
