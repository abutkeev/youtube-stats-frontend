import React from 'react';
import Box from '@material-ui/core/Box';

import Title from './Title';
import Time from './Time';

function Info(props) {
    const { title, description, publishedAt } = props
    return (
        <Box height='3.3rem' mt={1} mb={1}>
            <Title {...{ title, description }} />
            <Time time={publishedAt} />
        </Box>
    )
}

export default Info