
window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "Desktop Search Engine Market Share - 2016"
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 79.45, label: "Shopping"},
			{y: 7.31, label: "Food"},
			{y: 7.06, label: "Necessity"},
			{y: 4.91, label: "Others"},
			{y: 1.26, label: "Transport"}
		]
	}]
});
chart.render();

}
