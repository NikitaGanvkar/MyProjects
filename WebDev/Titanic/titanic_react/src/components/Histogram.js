import React, { Component } from 'react';
import Chart from "react-google-charts";
class Histogram extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const json = this.props.data
        var chart = [];
        chart.push([this.props.colname]);
        for (let x in json) {
            chart.push([json[x]]);
        }
        return (
            <Chart
                width={'201x'}
                height={'200px'}
                chartType="Histogram"
                loader={<div>Loading Chart</div>}
                data={chart}

                options={{
                    title: this.props.colname,
                    legend: { position: 'none' },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        );
    }
}
export default Histogram;




