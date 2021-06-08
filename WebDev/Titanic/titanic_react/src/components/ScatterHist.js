import React, { Component } from 'react';
import Chart from "react-google-charts";
class ScatterHist extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const json = this.props.data
        const chart = [];
        chart.push([this.props.colname]);
        for (let x in json) {
            chart.push([json[x]]);
        }
        return (
            <Chart
                width={'100px'}
                height={'100px'}
                chartType="Histogram"
                loader={<div>Loading Chart</div>}
                data={chart}


                options={{
                    title: this.props.colname,
                    legend: { position: 'none' },
                    hAxis: { textPosition: 'none' },
                    vAxis: { textPosition: 'none' },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        );
    }
}
export default ScatterHist;




