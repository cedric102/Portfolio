define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";


	let Charting = m.MindFusion.Charting;
	let Controls = m.MindFusion.Charting.Controls;
	let Collections = m.MindFusion.Charting.Collections;
	let Drawing = m.MindFusion.Charting.Drawing;
	
	let stockChart = new Controls.CandlestickChart(document.getElementById('stockChart'));
	
	stockChart.title = "The Big Corporation";
	stockChart.theme.titleFontSize = 16;
	
	stockChart.candlestickWidth = 12;
	
	stockChart.showLegend = false;
	stockChart.showXCoordinates = false;
	stockChart.xAxisLabelRotationAngle = 30;
	
	stockChart.xAxis.minValue = 0;
	stockChart.xAxis.interval = 1;
	stockChart.xAxis.maxValue = 40;
	stockChart.xAxis.title = "Time";
	stockChart.yAxis.title = "Price";
	
	stockChart.gridType = Charting.GridType.Horizontal;
	stockChart.theme.gridColor1 = new Drawing.Color("#ffffff");
	stockChart.theme.gridColor2 = new Drawing.Color("#fafafa");
	stockChart.theme.gridLineColor = new Drawing.Color("#cecece");
	stockChart.theme.gridLineStyle = Drawing.DashStyle.Dash;
	
	stockChart.plot.seriesStyle = new Charting.CandlestickSeriesStyle(new Drawing.Brush("#ff2f26"), new Drawing.Brush("#00b140"), new Drawing.Brush("#2e2e2a"), 2, Drawing.DashStyle.Solid, stockChart.plot.seriesRenderers.item(0));
	
	stockChart.theme.axisLabelsBrush = stockChart.theme.axisTitleBrush = stockChart.theme.axisStroke = new Drawing.Brush("#2e2e2e"); 
	stockChart.theme.highlightStroke = new Drawing.Brush("#cecece");

	let dataList = new Collections.List();


	function updateStock()
	{
		$.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=KOE7PMEOOPD18BYD", function(json) {
		
		    var times = json["Time Series (1min)"];
			
			var update = false;
			
			if(stockChart.series.count() > 0)
				  update = true;
			  
			  for(var time in times)
			  {
				  var stock_info = times[time];
				  
				  var dataItem = new Charting.StockPrice(stock_info["1. open"], stock_info["4. close"], stock_info["3. low"],
				  stock_info["2. high"], new Date(time));
				  
				  dataList.add(dataItem);
				  
				  if(update)
				  {
					  dataList.removeAt(0);
					  break;
				  }                				  
				   
			  }
			  
			 
			  
			  var series = new Charting.StockPriceSeries(dataList);
			  series.dateTimeFormat = Charting.DateTimeFormat.ShortTime;
			  
			  var data = new Collections.ObservableCollection();
			  data.add(series);
			  stockChart.series = data;
			  stockChart.draw();
			  
			  
		});

	}
	updateStock();
//	setInterval(updateStock, 2000);


	let Charting2 = m.MindFusion.Charting;
	let Controls2 = m.MindFusion.Charting.Controls;
	let Collections2 = m.MindFusion.Charting.Collections;
	let Drawing2 = m.MindFusion.Charting.Drawing;

	let stockChart2 = new Controls2.CandlestickChart(document.getElementById('stockChart2'));

	stockChart2.title = "The Big Corporation 2";
	stockChart2.theme.titleFontSize = 16;

	
	stockChart2.candlestickWidth = 12;
	
	stockChart2.showLegend = false;
	stockChart2.showXCoordinates = false;
	stockChart2.xAxisLabelRotationAngle = 30;
	
	stockChart2.xAxis.minValue = 0;
	stockChart2.xAxis.interval = 1;
	stockChart2.xAxis.maxValue = 40;
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

	let dataList2 = new Collections2.List();
	function updateStock2()
	{
		$.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=TSLA&interval=1min&apikey=KOE7PMEOOPD18BYD", function(json) {
		
			var times = json["Time Series (1min)"];
			
	                console.log( typeof( times ) );

			var update = false;
//			times = arrayReverseObj(times)
			if(stockChart2.series.count() > 0) {
				  update = true;
				  console.log( update );
                        }

	                console.log( times );
			var listOfTickers = [];
			for(var time in times )
			{
				listOfTickers.push(time);
				console.log(time);
			}

console.log(listOfTickers);
listOfTickers = listOfTickers.reverse()
console.log(listOfTickers);

			for(var time in listOfTickers )
			{
				console.log(listOfTickers[time]);
			}

			for(var time in listOfTickers )
			{
				var stock_info = times[listOfTickers[time]];
//				  console.log(stock_info);
				var dataItem = new Charting2.StockPrice(stock_info["1. open"], stock_info["4. close"], stock_info["3. low"],
				stock_info["2. high"], new Date(listOfTickers[time]));
				  console.log(dataItem);
				dataList2.add(dataItem);
				  
				if(update)
				{
					dataList2.removeAt(0);
					break;
				}                				  
				   
			}
			  
			 
			  
			console.log(dataList2);
			console.log(dataList2[0]);
			console.log(dataList2.reverse().reverse()[0]);
			var series = new Charting2.StockPriceSeries(dataList2);
			series.dateTimeFormat = Charting2.DateTimeFormat.ShortTime;
			  
			var data = new Collections2.ObservableCollection();
			data.add(series);
			stockChart2.series = data;
			stockChart2.draw();
			  
			  
		});
	}
	updateStock2();
//	setInterval(updateStock2, 2000);


});
