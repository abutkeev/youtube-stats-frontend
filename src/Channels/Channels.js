import React from 'react'
import { Grid, LinearProgress } from '@material-ui/core'

import Api from '../api/Api'
import ChannelCard from './ChannelCard/ChannelCard'

class Channels extends React.Component {
    state = {
        loading: true,
        channels: [],
    }

    async componentDidMount() {
        this.setState({
            loading: false,
            channels: Object.values(await Api.call('channels'))
        })
    }

    render() {
        return (
            <Grid container spacing={1}>
                {
                    this.state.loading ?
                        <Grid item xs={12}>
                            <LinearProgress color='secondary' />
                        </Grid>
                        : null
                }
                <Grid container item xs={12}>
                    <Grid item xs={false} sm={1} md={false}/>
                    <Grid container item xs={12} sm={10} md={12} lg={10} spacing={1}>
                        {
                            this.state.channels.map((channel) => (
                                <Grid item key={channel.id} xs={12} md={6}>
                                    <ChannelCard {...channel} />
                                </Grid>
                            )
                            )
                        }
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default Channels