import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import LinesEllipsis from 'react-lines-ellipsis'

function Title(props) {
    const { title } = props
    return (
        <Tooltip title={title}>
            <Typography component='div' gutterBottom variant='subtitle1'>
                <Box component='div' height='2.2em' lineHeight='1.2em' mb={1}>
                    <LinesEllipsis text={title} maxLine={2} basedOn='letters' />
                </Box>
            </Typography>
        </Tooltip>
    )
}

export default Title