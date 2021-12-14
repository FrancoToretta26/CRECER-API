import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class SplineChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title:{
				text: "Percentil de peso para la edad (en meses)"
			},
			axisX: {
			},
			axisY: {
				title: "Peso (en kg)",
				prefix: "$",
				includeZero: false
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: 0, y: 25060, z: 25000},
					{ x: 3, y: 27980 },
					{ x: 6, y: 42800 },
					{ x: 9, y: 32400 },
					{ x: 12, y: 35260 },
					{ x: 15, y: 33900 },
					{ x: 18, y: 40000 },
					{ x: 21, y: 52500 },
					{ x: 24, y: 32300 },
					{ x: 27, y: 32300 },
					{ x: 30, y: 32300 },
					{ x: 33, y: 32300 },
					{ x: 36, y: 32300 },
					{ x: 39, y: 32300 },
					{ x: 42, y: 32300 },
					{ x: 45, y: 32300 },
					{ x: 48, y: 32300 },
					{ x: 51, y: 32300 },
					{ x: 54, y: 32300 },
					{ x: 57, y: 32300 },
					{ x: 60, y: 32300 },
					{ x: 63, y: 32300 },
					{ x: 66, y: 32300 },
					{ x: 69, y: 32300 },
					{ x: 72, y: 32300 },
					{ x: 75, y: 32300 },
					{ x: 78, y: 32300 },
					{ x: 81, y: 32300 },
					{ x: 84, y: 32300 },
					{ x: 87, y: 32300 },
					{ x: 90, y: 32300 },	
				]
				
			}],
	
		}
		
		return (
		<div>
			<h1>React Spline Chart</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SplineChart;        