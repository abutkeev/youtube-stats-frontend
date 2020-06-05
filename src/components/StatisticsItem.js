import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format'

function StatisticsItem(props) {
    return (
        <Box display='flex' flexWrap='nowrap' mr={2}>
            <Box mr={1}>
                <props.icon />
            </Box>
            <Typography>
                <NumberFormat value={props.value} thousandSeparator='&nbsp;' displayType='text' />
            </Typography>
        </Box>
    )
}

export default StatisticsItem