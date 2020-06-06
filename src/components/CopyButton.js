import React from 'react';
import copy from 'copy-to-clipboard';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import CopyIcon from './icons/CopyIcon';

function createCopyHandle(data) {
    return (event) => {
        copy(data);
        event.stopPropagation();
    };
}

function CopyButton(props) {
    const text = props.text
    return (
        text?
        <Tooltip title={'Копировать ' + text + ' в буфер обмена'}>
            <IconButton onClick={createCopyHandle(text)}>
                <CopyIcon/>
            </IconButton>
        </Tooltip>
        :null
    )
}

export default CopyButton