import React from 'react';
import Box from '@material-ui/core/Box';
import TimeFormat from 'react-time-format';

function Time(props) {
    return (
        <Box>
            <TimeFormat value={new Date(props.time)} format='YYYY-MM-DD hh:mm:ss'/>
        </Box>
    )
}

export default Time