

define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";

	var interval = 60;
	var Symbol1 = "AAPL"
	var Symbol2 = "TSLA";

	let Charting = m.MindFusion.Charting;
	let Controls = m.MindFusion.Charting.Controls;
	let Collections;
	let Drawing = m.MindFusion.Charting.Drawing;
	
	let stockChart = new Controls.CandlestickChart(document.getElementById('stockChart1'));
	stockChart.title = "Symbol 1 : " + Symbol1;
	stockChart.theme.titleFontSize = 16;
	
	stockChart.candlestickWidth = 6;
	
	stockChart.showLegend = false;
	stockChart.xAxisLabelRotationAngle = 60;
	
	stockChart.xAxis.interval = 5;
	stockChart.xAxis.title = "Time";
	stockChart.xAxis.titleFontSize = 16;
	stockChart.yAxis.title = "Price";
	stockChart.showXCoordinates = false;
	
	stockChart.gridType = Charting.GridType.Horizontal;
	stockChart.theme.gridColor1 = new Drawing.Color("#ffffff");
	stockChart.theme.gridColor2 = new Drawing.Color("#fafafa");
	stockChart.theme.gridLineColor = new Drawing.Color("#cecece");
	stockChart.theme.gridLineStyle = Drawing.DashStyle.Dash;
	
	stockChart.plot.seriesStyle = new Charting.CandlestickSeriesStyle(new Drawing.Brush("#ff2f26"), new Drawing.Brush("#00b140"), new Drawing.Brush("#2e2e2a"), 2, Drawing.DashStyle.Solid, stockChart.plot.seriesRenderers.item(0));
	
	stockChart.theme.axisLabelsBrush = stockChart.theme.axisTitleBrush = stockChart.theme.axisStroke = new Drawing.Brush("#2e2e2e"); 
	stockChart.theme.highlightStroke = new Drawing.Brush("#cecece");

	let dataList;
	var times1 = [];

	function updateStock1()
	{
		Collections = m.MindFusion.Charting.Collections;
		dataList = new Collections.List();
		while (dataList.length) { dataList.pop(); }
		var maxShow = -1;
		var minShow = 999;
		$.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+Symbol1+"&interval="+interval+"min&apikey=KOE7PMEOOPD18BYD", function(json) {
		
			stockChart.title = "Symbol 1 : " + Symbol1;

			times1 = json["Time Series ("+interval+"min)"];
			
			var update = false;
			
			if(stockChart.series.count() > 0)
				update = true;
			  
			var listOfTickers = [];
			for(var time in times1 )
				listOfTickers.push(time);

			listOfTickers = listOfTickers.reverse()

			for(var time in listOfTickers)
			{
				var stock_info = times1[listOfTickers[time]];
				  
				var dataItem = new Charting.StockPrice(stock_info["4. close"], stock_info["1. open"], stock_info["3. low"],
				stock_info["2. high"], new Date(listOfTickers[time]));
				  
				dataList.add(dataItem);

				if( stock_info["2. high"] > maxShow )
					maxShow = stock_info["2. high"]
				if( stock_info["3. low"] < minShow )
					minShow = stock_info["3. low"]            				  
				   
			}
			stockChart.yAxis.minValue = minShow;
			stockChart.yAxis.maxValue = maxShow;
			document.getElementById("firstPercentage").innerHTML = "Fluctuation : " + Math.round( ( ( maxShow - minShow ) / maxShow ) * 10000 ) / 100 + "%";
			 
			  
			var series = new Charting.StockPriceSeries(dataList);
			series.dateTimeFormat = Charting.DateTimeFormat.ShortTime;
			  
			var data = new Collections.ObservableCollection();
			data.add(series);
			stockChart.series = data;
			stockChart.draw();
			  
		});

	}
	updateStock1();

	let Charting2 = m.MindFusion.Charting;
	let Controls2 = m.MindFusion.Charting.Controls;
	let Collections2;
	let Drawing2 = m.MindFusion.Charting.Drawing;

	let stockChart2 = new Controls2.CandlestickChart(document.getElementById('stockChart2'));
	stockChart2.title = "Symbol 2 : " + Symbol2;
	stockChart2.theme.titleFontSize = 16;

	
	stockChart2.candlestickWidth = 6;
	
	stockChart2.showLegend = false;
	stockChart2.showXCoordinates = false;
	stockChart2.xAxisLabelRotationAngle = 60;
	
	stockChart2.xAxis.interval = 1;
	stockChart2.xAxis.title = "Time";
	stockChart2.yAxis.title = "Price";
	
	stockChart2.gridType = Charting2.GridType.Horizontal;
	stockChart2.theme.gridColor1 = new Drawing2.Color("#ffffff");
	stockChart2.theme.gridColor2 = new Drawing2.Color("#fafafa");
	stockChart2.theme.gridLineColor = new Drawing2.Color("#cecece");
	stockChart2.theme.gridLineStyle = Drawing2.DashStyle.Dash;

	

	stockChart2.plot.seriesStyle = new Charting2.CandlestickSeriesStyle(new Drawing2.Brush("#ff2f26"), new Drawing2.Brush("#00b140"), new Drawing2.Brush("#2e2e2a"), 2, Drawing2.DashStyle.Solid, stockChart2.plot.seriesRenderers.item(0));
	
	stockChart2.theme.axisLabelsBrush = stockChart2.theme.axisTitleBrush = stockChart2.theme.axisStroke = new Drawing2.Brush("#2e2e2e"); 

	stockChart2.theme.highlightStroke = new Drawing2.Brush("#cecece");

	let dataList2;
	var times2 = [];
	stockChart2.showLegend = false;
	function updateStock2()
	{
		Collections2 = m.MindFusion.Charting.Collections;
		dataList2 = new Collections2.List()
		while (dataList2.length) { dataList2.pop(); }
		var maxShow = -1;
		var minShow = 999;

		$.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+Symbol2+"&interval="+interval+"min&apikey=KOE7PMEOOPD18BYD", function(json) {
		
			stockChart2.title = "Symbol 2 : " + Symbol2;

			times2 = json["Time Series ("+interval+"min)"];

			var update = false;

			if(stockChart2.series.count() > 0)
				  update = true;

			var listOfTickers = [];
			for(var time in times2 )
				listOfTickers.push(time);

			listOfTickers = listOfTickers.reverse()
			for(var time in listOfTickers)
			{
				var stock_info = times2[listOfTickers[time]];

				var dataItem = new Charting2.StockPrice(stock_info["4. close"], stock_info["1. open"], stock_info["3. low"],
				stock_info["2. high"], new Date(listOfTickers[time]));

				dataList2.add(dataItem);

				if( stock_info["2. high"] > maxShow )
					maxShow = stock_info["2. high"]
				if( stock_info["3. low"] < minShow )
					minShow = stock_info["3. low"] 
				   
			}
			  
			stockChart2.yAxis.minValue = minShow;
			stockChart2.yAxis.maxValue = maxShow;
			document.getElementById("secondPercentage").innerHTML = "Fluctuation : " + Math.round( ( ( maxShow - minShow ) / maxShow ) * 10000 ) / 100 + "%";
			  

			var series = new Charting2.StockPriceSeries(dataList2);
			series.dateTimeFormat = Charting2.DateTimeFormat.ShortTime;
			  
			var data = new Collections2.ObservableCollection();
			data.add(series);
			stockChart2.series = data;
			stockChart2.draw();
			  
			  
		});
	}
	updateStock2();


	let Charting3 = m.MindFusion.Charting;
	let Controls3 = m.MindFusion.Charting.Controls;
	let Collections3;
	let Drawing3 = m.MindFusion.Charting.Drawing;

	let lineChart = new Controls3.LineChart(document.getElementById('stockChart3'));
	lineChart.showZoomWidgets = false;
	lineChart.showXTicks = true;
	lineChart.showYTicks = true;
	lineChart.showLegend = false;
	lineChart.title = "RATIO";

	lineChart.theme.gridColor1 = new Drawing3.Color("#ffffff");
	lineChart.theme.gridColor2 = new Drawing3.Color("#fafafa");
	lineChart.theme.gridLineColor = new Drawing3.Color("#cecece");
	lineChart.theme.gridLineStyle = Drawing3.DashStyle.Dash;
	lineChart.gridType = Charting3.GridType.Horizontal;

	var diffList=[];
	var timeList=[];
	var labels=[];
	function Combine()
	{
		Collections3 = m.MindFusion.Charting.Collections;
		var maxShow = -1;
		var minShow = 999;

		while (timeList.length) { timeList.pop(); }
		while (diffList.length) { diffList.pop(); }
		var i=0;
		for( var time in times2 ) {
			if( time in times1 ) {
				var stock_info1 = times1[time];
				var stock_info2 = times2[time];
				var factor = stock_info1["4. close"] / stock_info2["4. close"]
				timeList.push( time )
				diffList.push( factor )
				labels.push( i )
				i++;
				if( factor > maxShow )
					maxShow = factor
				if( factor < minShow )
					minShow = factor
			}

		}
		diffList = diffList.reverse();
		lineChart.xAxis.maxValue = 100;
		lineChart.yAxis.maxValue = maxShow+0.001;
		lineChart.yAxis.minValue = minShow-0.001;
		document.getElementById("thirdPercentage").innerHTML = "Fluctuation : " + Math.round( ( ( maxShow - minShow ) / maxShow ) * 10000 ) / 100 + "%";

		var series2 = new Charting3.Series2D( new Collections3.List(labels), new Collections3.List(diffList) , new Collections3.List( labels ) );
		lineChart.series.add(series2);
		lineChart.draw();

	}

	setTimeout(Combine, 2000);

	$('#upload1').click(function(){
		Symbol1 = document.getElementById("filename1").value;
		updateStock1();
	});

	$('#upload2').click(function(){
		Symbol2 = document.getElementById("filename2").value;
		updateStock2();
	});

	$('#upload3').click(function(){
		Combine();
	});

});



