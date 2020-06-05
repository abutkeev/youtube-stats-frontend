import React from 'react';

function ChannelTooltip(props) {
    // const { id, title, description, customUrl, publishedAt, statistics, thumbnails } = props
    const { description } = props
    return (
        <pre>
            {description}
        </pre>
    )
}

export default ChannelTooltip