import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format'

function StatisticsItem(props) {
    return (
        <Box display='flex' flexWrap='nowrap' mr={1.5}>
            <Box mr={0.5}>
                <props.icon fontSize='small'/>
            </Box>
            <Typography variant='body2'>
                <NumberFormat value={props.value} thousandSeparator='&nbsp;' displayType='text' />
            </Typography>
        </Box>
    )
}

export default StatisticsItem