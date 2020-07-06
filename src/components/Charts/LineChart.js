import React from 'react';
import Box from '@material-ui/core/Box';
import _ from 'underscore';
import { Charts, ChartContainer, ChartRow, YAxis, LineChart, Resizable, Legend } from "react-timeseries-charts";
import { TimeSeries } from "pondjs";

import ru from 'd3-time-format/locale/ru-RU.json';

import CrossHair from './CrossHair';
import Styler from './Styler';
import { timeFormatDefaultLocale, timeFormat } from 'd3-time-format';
import { timeDay, timeMinute } from 'd3-time';

class Chart extends React.Component {
    state = {
        columns: [],
        storage: false,
        timerange: null,
        x: null,
        y: null,
        disabled: {},
    }

    constructor() {
        timeFormatDefaultLocale(ru)
        console.log(ru)
        super()
    }

    constructTimeSeries(in_data, columns) {
        const { points, skipped_counters } = in_data.reduce((state, item) => {
            let column_index = columns.indexOf(item.counter) + 1
            if (column_index === 0) {
                if (!state.skipped_counters.includes(item.counter)) {
                    state.skipped_counters.push(item.counter)
                }
                return state
            }

            const time_index = state.time.indexOf(item.time)
            if (time_index === -1) {
                const date = new Date(item.time)
                const entry = [date]
                entry[column_index] = item.value
                state.points.push(entry)
                state.time.push(item.time)
            } else {
                state.points[time_index][column_index] = item.value
            }

            return state
        }, { skipped_counters: [], points: [], time: [] })

        console.log(skipped_counters)
        columns.unshift('time')
        const data = {
            name: 'counters',
            columns,
            points
        }
        const result = new TimeSeries(data)
        columns.shift()
        return result
    }

    async componentDidMount() {
        const columns = this.props.columns
        const storage = this.constructTimeSeries(this.props.data, this.props.columns)
        this.setState({
            columns,
            storage,
            timerange: storage.range(),
        })
    }

    shouldComponentUpdate(nextProp, nextState) {
        return !(_.isEqual(nextProp, this.props) && _.isEqual(nextState, this.state));
    }

    handleTimeRangeChange = timerange => {
        this.setState({ timerange })
    }

    handleTrackerChanged = tracker => {
        if (!tracker) {
            this.setState({ tracker, x: null, y: null });
        } else {
            this.setState({ tracker });
        }
    }

    reset() {
        const timerange = this.state.storage.range()
        this.setState(
            {
                selection: null,
                timerange,
            }
        )
    }

    getCategories() {
        return this.state.columns.map(column => {
            let rv = { key: column, label: column }
            return rv;
        })
    }

    style = false

    getStyles() {
        if (!this.style) {
            const styles = this.state.columns.map(column => {
                return {
                    key: column,
                    // color: 'white',
                    width: 2,
                    // labelColor: 'white',
                }

            })
            this.style = new Styler(styles, 'Dark2')
        }
        return this.style
    }

    render() {
        const series = this.state.storage
        if (!series) {
            return null
        }
        const columns = this.state.columns
        const style = this.getStyles()
        return (
            <Box>
                <Legend
                    type='line'
                    categories={this.getCategories()}
                    style={style}
                    highlight={this.state.highlight}
                    onHighlightChange={highlight => this.setState({ highlight })}
                    selection={this.state.selection}
                    onSelectionChange={selection => this.setState({ selection })}
                />
                <Resizable>
                    <ChartContainer
                        timeRange={this.state.timerange}
                        enablePanZoom
                        enableDragZoom
                        showGrid
                        hideAxisLine
                        maxTime={series.range().end()}
                        minTime={series.range().begin()}
                        onBackgroundClick={this.reset.bind(this)}
                        onTimeRangeChanged={this.handleTimeRangeChange}
                        onTrackerChanged={this.handleTrackerChanged}
                        timeAxisStyle={style.timeAxisStyle()}
                        // format={date => {
                        //     const format = timeFormat('%c')
                        //     console.log(date, timeMinute(date))
                        //     // console.log(d3.format(date))
                        //     // return format(date)
                        // }}
                    >
                        <ChartRow height={360}>
                            {
                                columns.map(column => (
                                    <YAxis
                                        key={column}
                                        id={column}
                                        type="linear"
                                        min={1}
                                        max={series.max(column)}
                                        visible={this.state.selection === column || this.state.highlight === column}
                                        showGrid
                                        style={style.yAxisStyle(column)}
                                    />
                                ))
                            }
                            <Charts>
                                {
                                    columns.map(column => (
                                        <LineChart
                                            style={style}
                                            key={column}
                                            axis={column}
                                            series={series}
                                            columns={[column]}
                                            highlight={this.state.highlight}
                                            onHighlightChange={highlight =>
                                                this.setState({ highlight })
                                            }
                                            selection={this.state.selection}
                                            onSelectionChange={selection =>
                                                this.setState({ selection })
                                            }
                                        />
                                    ))
                                }
                                <CrossHair x={this.state.x} y={this.state.y} />
                            </Charts>
                        </ChartRow>
                    </ChartContainer>
                </Resizable>
            </Box>
        )
    }
}

export default Chart