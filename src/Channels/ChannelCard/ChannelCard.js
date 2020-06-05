import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

import StatisticsBlock from './StatisticsBlock';
import ChannelTooltip from './ChannelTooltip';
import { Button } from '@material-ui/core';

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
        <Card>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Avatar src={avatar_url} className={classes.large} />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant='h6'>
                            {title}
                            <Tooltip title={<ChannelTooltip {...props}/>}>
                                <InfoIcon />
                            </Tooltip>
                        </Typography>
                        <StatisticsBlock {...props.statistics} />
                        <Button>Статистика</Button>
                        <Button>Видео</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
