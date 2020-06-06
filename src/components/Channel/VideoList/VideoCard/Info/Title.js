import React from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import LinesEllipsis from 'react-lines-ellipsis'

function Title(props) {
    const { title } = props

    return (
        <Tooltip title={title}>
            <Box component='div' lineHeight='1.1' fontWeight={500} height='2.2rem' fontSize='1rem' overflow='hidden'>
                <LinesEllipsis text={title} maxLine={2} basedOn='letters' />
            </Box>
        </Tooltip>
    )
}

export default Title