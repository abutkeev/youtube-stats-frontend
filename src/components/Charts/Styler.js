import { Styler as ParentStyler } from 'react-timeseries-charts/lib/js/styler';
import _ from 'underscore';

export default class Styler extends ParentStyler {
    // constructor(columnns, theme) {
    //     super(columnns, theme)
    // }

    getColumnColor(column) {
        const numColumns = this.numColumns();
        const colorLookup = this.colorLookup(numColumns);
        const i = _.indexOf(this.columnNames, column);
        const columnName = this.columnNames[i];
        const { color } = this.columnStyles[columnName];
        const c = color || colorLookup[i % colorLookup.length];
        return c
    }

    legendStyle(column, type) {
        const style = super.legendStyle(column, type)
        // console.log('before', style)

        for (const variant in style.label) {
            delete style.label[variant].color
        }
        // console.log('after', style)
        return style
    }

    yAxisStyle(column) {
        // const fill = this.getColumnColor(column)
        const fill = 'red'
        const style = {
            ticks: {
                fill,
                stroke: "#AAA",
                opacity: 0.5,
                "stroke-dasharray": "1,1"
            },
            label: {
                fill,
            },
            axis: {
                fill,
            }
        }
        // console.log(column, style)
        return style
    }

    timeAxisStyle() {
        return {
            ticks: {
                stroke: "#AAA",
                opacity: 0.25,
                "stroke-dasharray": "1,1"
                // Note: this isn't in camel case because this is
                // passed into d3's style
            },
            values: {
                fill: "#AAA",
                "font-size": 12
            }
        }
    }
}