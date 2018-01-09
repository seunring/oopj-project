window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Daily Expenses, December 2017"
	},	
	axisY: {
		title: "Singapore Dollar",
		titleFontColor: "Black",
		lineColor: "black",
		labelFontColor: "black",
		tickColor: "yellow"
	},
	axisY2: {
		title: "Daily limits",
		titleFontColor: "red",
		lineColor: "#C0504E",
		labelFontColor: "#C0504E",
		tickColor: "#C0504E"
	},	
	toolTip: {
		shared: true
	},
	legend: {
		cursor:"pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "column",
		name: "Expenses",
		legendText: "Expenses",
		showInLegend: true, 
		dataPoints:[
			{ label: "Monday", y: 60 },
			{ label: "Tuesday", y: 20 },
			{ label: "Wednesday", y: 127.90 },
			{ label: "Thurday", y: 0 },
			{ label: "Friday", y: 0 },
			{ label: "Saturday", y:0 },
          	{ label: "Sunday", y:0 }
		]
	},
	{
		type: "column",	
		name: "Daily limits(SGD)",
		legendText: "Daily limits",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints:[
			{ label: "Monday", y: 40 },
			{ label: "Tuesday", y: 40 },
			{ label: "Wednesday", y: 40},
			{ label: "Thurday", y: 40 },
			{ label: "Friday", y: 40 },
			{ label: "Saturday", y: 40 },
       { label: "Sunday", y: 40 }
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}

}
