import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Link as RouterLink } from 'react-router-dom';
import LinkIcon from '@material-ui/icons/Link';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import CopyButton from '../../../CopyButton';

function Buttons(props) {
    const url = 'https://www.youtube.com/watch?v=' + props.id
    return (
        <Box>
            <Button startIcon={<EqualizerIcon />} component={RouterLink} to={'/video/' + props.id + '/stats'}>Статистика</Button>
            <Tooltip title='Открыть на YouTube'>
                <IconButton target='_blank' rel='noopener' href={url}><LinkIcon /></IconButton>
            </Tooltip>
            <CopyButton text={url} />
        </Box>
    )
}

export default Buttons