import React, { Component } from 'react';
import Chart from "react-google-charts";
class ScatterPlot extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const xvals = this.props.x
        const yvals = this.props.y
        const chart = [];
        chart.push([this.props.xlabel, this.props.ylabel]);
        for (let i in xvals) {
            chart.push([xvals[i], yvals[i]]);
        }
        return (
            <Chart
                width={'100px'}
                height={'100px'}
                chartType="ScatterChart"
                loader={<div>Loading Chart</div>}
                data={chart}
                options={{
                    hAxis: { textPosition: 'none' },
                    vAxis: { textPosition: 'none' },
                    legend: 'none',
                }}
                rootProps={{ 'data-testid': '1' }}
            />

        );
    }
}
export default ScatterPlot;








