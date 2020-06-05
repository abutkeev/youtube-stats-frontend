import React from 'react';
import Box from '@material-ui/core/Box';

function Thumbnail(props) {
    // console.log(props)
    return (
        <Box >
            <img src={props.medium.url} width={'100%'} alt={'thumbnail'}/>
        </Box>
    )
}

export default Thumbnail