import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TimeFormat from 'react-time-format';

function Time(props) {
    return (
        <Box>
            <Typography variant='body2' color='textSecondary'>
                <TimeFormat value={new Date(props.time)} format='YYYY-MM-DD hh:mm:ss' />
            </Typography>
        </Box>
    )
}

export default Time