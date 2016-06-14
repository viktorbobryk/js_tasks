var moduleStat = (function (){

	var catalog = [
		{
			/* city */
			cityName: "Rivne",
			days:
				[
					{
						day: "01",
						temperature: 25,
						hymidity: 70,
						wind: "0"
					}, 
					{
						day: "02",
						temperature: 22,
						hymidity: 72,
						wind: "0"
					}, 
					{
						day: "03",
						temperature: 20,
						hymidity: 75,
						wind: "0" 
					}, 
					{
						day: "04",
						temperature: 22,
						hymidity: 70,
						wind: "45"
					}, 
					{
						day: "05",
						temperature: 23,
						hymidity: 70,
						wind: "45"
					}, 
					{
						day: "06",
						temperature: 15,
						hymidity: 70,
						wind: "45" 
					}, 
					{
						day: "07",
						temperature: 25,
						hymidity: 67,
						wind: "45"
					}, 
					{
						day: "08",
						temperature: 24,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "09",
						temperature: 25,
						hymidity: 70,
						wind: "90" 
					}, 
					{
						day: "10",
						temperature: 24,
						hymidity: 71,
						wind: "90" 
					}, 
					{
						day: "11",
						temperature: 23,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "12",
						temperature: 24,
						hymidity: 65,
						wind: "135"
					}, 
					{
						day: "13",
						temperature: 27,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "14",
						temperature: 29,
						hymidity: 70,
						wind: "90" 
					}, 
					{
						day: "15",
						temperature: 30,
						hymidity: 65,
						wind: "90"
					}, 
					{
						day: "16",
						temperature: 31,
						hymidity: 60,
						wind: "90"
					}, 
					{
						day: "17",
						temperature: 30,
						hymidity: 60,
						wind: "90"
					}, 
					{
						day: "18",
						temperature: 32,
						hymidity: 60,
						wind: "135"
					}, 
					{
						day: "19",
						temperature: 31,
						hymidity: 60,
						wind: "135"
					}, 
					{
						day: "20",
						temperature: 30,
						hymidity: 60,
						wind: "180"
					}, 
					{
						day: "21",
						temperature: 29,
						hymidity: 65,
						wind: "180"
					}, {
						day: "22",
						temperature: 28,
						hymidity: 65,
						wind: "180"
					}, 
					{
						day: "23",
						temperature: 25,
						hymidity: 70,
						wind: "270"
					}, 
					{
						day: "24",
						temperature: 25,
						hymidity: 70,
						wind: "225"
					}, 
					{
						day: "25",
						temperature: 22,
						hymidity: 70,
						wind: "270"
					},
					{
						day: "26",
						temperature: 20,
						hymidity: 75,
						wind: "270"
					}, 
					{
						day: "27",
						temperature: 15,
						hymidity: 76,
						wind: "270"
					}, 	
					{
						day: "28",
						temperature: 15,
						hymidity: 80,
						wind: "270"
					}, 
					{
						day: "29",
						temperature: 15,
						hymidity: 90,
						wind: "235"
					}, 
					{
						day: "30",
						temperature: 15,
						hymidity: 70,
						wind: "235"
					},
				]
		},
		{
		/* city */
			cityName: "Lviv",
			days:
				[
					{
						day: "01",
						temperature: 25,
						hymidity: 70,
						wind: "45"
					}, 
					{
						day: "02",
						temperature: 25,
						hymidity: 70,
						wind: "45"
					}, 
					{
						day: "03",
						temperature: 25,
						hymidity: 70,
						wind: "45"
					}, 
					{
						day: "04",
						temperature: 25,
						hymidity: 70,
						wind: "45"
					}, 
					{
						day: "05",
						temperature: 26,
						hymidity: 60,
						wind: "45"
					}, 
					{
						day: "06",
						temperature: 26,
						hymidity: 65,
						wind: "90"
					}, 
					{
						day: "07",
						temperature: 25,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "08",
						temperature: 25,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "09",
						temperature: 25,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "10",
						temperature: 26,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "11",
						temperature: 23,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "12",
						temperature: 23,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "13",
						temperature: 20,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "14",
						temperature: 20,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "15",
						temperature: 20,
						hymidity: 60,
						wind: "90"
					}, 
					{
						day: "16",
						temperature: 19,
						hymidity: 80,
						wind: "135"
					}, 
					{
						day: "17",
						temperature: 15,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "18",
						temperature: 15,
						hymidity: 80,
						wind: "135"
					}, 
					{
						day: "19",
						temperature: 15,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "20",
						temperature: 15,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "21",
						temperature: 15,
						hymidity: 70,
						wind: "135"
					}, {
						day: "22",
						temperature: 15,
						hymidity: 90,
						wind: "135"
					}, 
					{
						day: "23",
						temperature: 15,
						hymidity: 90,
						wind: "135"
					}, 
					{
						day: "24",
						temperature: 15,
						hymidity: 90,
						wind: "135"
					}, 
					{
						day: "25",
						temperature: 15,
						hymidity: 90,
						wind: "135"
					},
					{
						day: "26",
						temperature: 15,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "27",
						temperature: 20,
						hymidity: 70,
						wind: "180"
					}, 	
					{
						day: "28",
						temperature: 22,
						hymidity: 72,
						wind: "180"
					}, 
					{
						day: "29",
						temperature: 25,
						hymidity: 70,
						wind: "180"
					}, 
					{
						day: "30",
						temperature: 29,
						hymidity: 63,
						wind: "180"
					}
				],
		},
		{
		/* city */
			cityName: "Kyiv",
			days:
				[
					{
						day: "01",
						temperature: 20,
						hymidity: 70,
						wind: "180"
					}, 
					{
						day: "02",
						temperature: 22,
						hymidity: 71,
						wind: "180"
					}, 
					{
						day: "03",
						temperature: 15,
						hymidity: 70,
						wind: "180"
					}, 
					{
						day: "04",
						temperature: 21,
						hymidity: 74,
						wind: "180"
					}, 
					{
						day: "05",
						temperature: 25,
						hymidity: 80,
						wind: "135"
					}, 
					{
						day: "06",
						temperature: 21,
						hymidity: 72,
						wind: "135"
					}, 
					{
						day: "07",
						temperature: 20,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "08",
						temperature: 20,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "09",
						temperature: 14,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "10",
						temperature: 21,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "11",
						temperature: 25,
						hymidity: 75,
						wind: "135"
					}, 
					{
						day: "12",
						temperature: 25,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "13",
						temperature: 25,
						hymidity: 72,
						wind: "135"
					}, 
					{
						day: "14",
						temperature: 25,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "15",
						temperature: 28,
						hymidity: 76,
						wind: "135"
					}, 
					{
						day: "16",
						temperature: 40,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "17",
						temperature: 30,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "18",
						temperature: 28,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "19",
						temperature: 29,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "20",
						temperature: 30,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "21",
						temperature: 30,
						hymidity: 70,
						wind: "135"
					}, {
						day: "22",
						temperature: 30,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "23",
						temperature: 30,
						hymidity: 70,
						wind: "135"
					}, 
					{
						day: "24",
						temperature: 32,
						hymidity: 50,
						wind: "135"
					}, 
					{
						day: "25",
						temperature: 32,
						hymidity: 60,
						wind: "90"
					},
					{
						day: "26",
						temperature: 30,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "27",
						temperature: 30,
						hymidity: 70,
						wind: "90"
					}, 	
					{
						day: "28",
						temperature: 35,
						hymidity: 70,
						wind: "90"
					}, 
					{
						day: "29",
						temperature: 36,
						hymidity: 50,
						wind: "90"
					}, 
					{
						day: "30",
						temperature: 34,
						hymidity: 50,
						wind: "90"
					},
				]		
		},
		{
		/* city */
			cityName: "London",
			days:
				[
					{
						day: "01",
						temperature: 15,
						hymidity: 90,
						wind: "0"
					}, 
					{
						day: "02",
						temperature: 15,
						hymidity: 90,
						wind:  "0"
					}, 
					{
						day: "03",
						temperature: 15,
						hymidity: 90,
						wind: "0"
					}, 
					{
						day: "04",
						temperature: 15,
						hymidity: 90,
						wind: "0"
					}, 
					{
						day: "05",
						temperature: 15,
						hymidity: 90,
						wind: "0"
					}, 
					{
						day: "06",
						temperature: 16,
						hymidity: 70,
						wind: "0"
					}, 
					{
						day: "07",
						temperature: 20,
						hymidity: 95,
						wind: "0"
					}, 
					{
						day: "08",
						temperature: 20,
						hymidity: 95,
						wind: "0" 
					}, 
					{
						day: "09",
						temperature: 20,
						hymidity: 95,
						wind: "0" 
					}, 
					{
						day: "10",
						temperature: 14,
						hymidity: 95,
						wind: "0" 
					}, 
					{
						day: "11",
						temperature: 19,
						hymidity: 99,
						wind: "0"
					}, 
					{
						day: "12",
						temperature: 19,
						hymidity: 99,
						wind: "0"
					}, 
					{
						day: "13",
						temperature: 15,
						hymidity: 80,
						wind:  "0"
					}, 
					{
						day: "14",
						temperature: 15,
						hymidity: 98,
						wind: "0"
					}, 
					{
						day: "15",
						temperature: 15,
						hymidity: 98,
						wind: "0" 
					}, 
					{
						day: "16",
						temperature: 15,
						hymidity: 98,
						wind: "45" 
					}, 
					{
						day: "17",
						temperature: 14,
						hymidity: 98,
						wind: "45" 
					}, 
					{
						day: "18",
						temperature: 15,
						hymidity: 97,
						wind: "45" 
					}, 
					{
						day: "19",
						temperature: 15,
						hymidity: 97,
						wind: "45" 
					}, 
					{
						day: "20",
						temperature: 15,
						hymidity: 96,
						wind: "45" 
					}, 
					{
						day: "21",
						temperature: 15,
						hymidity: 96,
						wind:  "45"
					}, {
						day: "22",
						temperature: 15,
						hymidity: 90,
						wind:  "45"
					}, 
					{
						day: "23",
						temperature: 15,
						hymidity: 90,
						wind: "45" 
					}, 
					{
						day: "24",
						temperature: 15,
						hymidity: 90,
						wind: "45" 
					}, 
					{
						day: "25",
						temperature: 15,
						hymidity: 90,
						wind: "45" 
					},
					{
						day: "26",
						temperature: 15,
						hymidity: 96,
						wind: "45" 
					}, 
					{
						day: "27",
						temperature: 16,
						hymidity: 70,
						wind: "90"
					}, 	
					{
						day: "28",
						temperature: 20,
						hymidity: 70,
						wind: "45"
					}, 
					{
						day: "29",
						temperature: 25,
						hymidity: 70,
						wind:  "45"
					}, 
					{
						day: "30",
						temperature: 26,
						hymidity: 70,
						wind:  "45"
					}, 
				]	
		},
	];
	var searchAvgTemp = function(){
		var result = 0;
		var sum = 0;
		var temp = [];
		for(var i = 0; i < catalog.length; i++){
			
			for(var j = 0; j < catalog[i].days.length; j++){
				temp.push(catalog[i].days[j].temperature)
				
			}
		}
		//console.log(temp);
		for(var i = 0; i < temp.length; i++){
			sum += temp[i];
		}
		result = sum / temp.length;
		//console.log (result);
		return result.toFixed(2);
	}
	//searchAvgTemp();
	
	var searchAvgCityTemp = function(cityName){
		var result = 0;
		var sum = 0;
		var temp = [];
		for(var i = 0; i < catalog.length; i++){
			if(cityName == catalog[i].cityName){
				for(var j = 0; j < catalog[i].days.length; j++){
					temp.push(catalog[i].days[j].temperature)
					
				}
			}	
		}
		console.log(temp);
		for(var i = 0; i < temp.length; i++){
			sum += temp[i];
		}
		result = sum / temp.length;
		//console.log (result.toFixed(2));
		return result.toFixed(2);
	}
	//searchAvgCityTemp("London");
	var searchMaxTemp = function(){
		var temp = [];
		var max = -Infinity;
		var day;
		var city;
		for(var i = 0; i < catalog.length; i++){
			
			for(var j = 0; j < catalog[i].days.length; j++){
				temp.push(catalog[i].days[j].temperature)
				if(max < catalog[i].days[j].temperature){
					max = catalog[i].days[j].temperature;
					day = catalog[i].days[j].day;
					city = catalog[i].cityName;
				}
				
			}
		}
		//console.log(temp);
		//console.log(max);
		//console.log(day);
		//console.log(city);
		return max;
		return day;
		return city;
	}
	//searchMaxTemp();
	
	var searchMaxHymid = function(){
		var hymid = [];
		var max = -Infinity;
		var day;
		var city;
		for(var i = 0; i < catalog.length; i++){
			
			for(var j = 0; j < catalog[i].days.length; j++){
				hymid.push(catalog[i].days[j].hymidity)
				if(max < catalog[i].days[j].hymidity){
					max = catalog[i].days[j].hymidity;
					day = catalog[i].days[j].day;
					city = catalog[i].cityName;
				}
				
			}
		}
		//console.log(hymid);
		//console.log(max);
		//console.log(day);
		//console.log(city);
		return max;
		return day;
		return city;
	}
	//searchMaxHymid();
	
	var searchMaxWind = function(){
		var wind = [];
		var max = -Infinity;
		var day;
		var city;
		for(var i = 0; i < catalog.length; i++){
			
			for(var j = 0; j < catalog[i].days.length; j++){
				wind.push(catalog[i].days[j].wind)
				if(max < catalog[i].days[j].wind){
					max = catalog[i].days[j].wind;
					day = catalog[i].days[j].day;
					city = catalog[i].cityName;
				}
				
			}
		}
		console.log(wind);
		console.log(max);
		console.log(day);
		console.log(city);
		return max;
		return day;
		return city;
	}
	searchMaxWind();
})();