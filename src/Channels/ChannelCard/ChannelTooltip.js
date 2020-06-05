import React from 'react';

function ChannelTooltip(props) {
    const { id, title, description, customUrl, publishedAt, statistics, thumbnails } = props
    return (
        <pre>
            {description}
        </pre>
    )
}

export default ChannelTooltip