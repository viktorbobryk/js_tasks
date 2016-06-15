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
						winddir: 0,// wind direction in degrees from 0 to 360
						windpow: 20
					}, 
					{
						day: "02",
						temperature: 22,
						hymidity: 72,
						winddir: 0,
						windpow: 22
					}, 
					{
						day: "03",
						temperature: 20,
						hymidity: 75,
						winddir: 0,
						windpow: 23
					}, 
					{
						day: "04",
						temperature: 22,
						hymidity: 70,
						winddir: 45,
						windpow:20
					}, 
					{
						day: "05",
						temperature: 23,
						hymidity: 70,
						winddir: 45,
						windpow: 20
					}, 
					{
						day: "06",
						temperature: 15,
						hymidity: 70,
						winddir: 45,
						windpow: 21	
					}, 
					{
						day: "07",
						temperature: 25,
						hymidity: 67,
						winddir: 45,
						windpow: 22
					}, 
					{
						day: "08",
						temperature: 24,
						hymidity: 70,
						winddir: 315,
						windpow: 20
					}, 
					{
						day: "09",
						temperature: 25,
						hymidity: 70,
						winddir: 90,
						windpow: 32
						
					}, 
					{
						day: "10",
						temperature: 24,
						hymidity: 71,
						winddir: 90,
						windpow: 30	
					}, 
					{
						day: "11",
						temperature: 23,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "12",
						temperature: 24,
						hymidity: 65,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "13",
						temperature: 27,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "14",
						temperature: 29,
						hymidity: 70,
						winddir: 90,
						windpow: 22						
					}, 
					{
						day: "15",
						temperature: 30,
						hymidity: 65,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "16",
						temperature: 31,
						hymidity: 60,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "17",
						temperature: 30,
						hymidity: 60,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "18",
						temperature: 32,
						hymidity: 60,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "19",
						temperature: 31,
						hymidity: 60,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "20",
						temperature: 30,
						hymidity: 60,
						winddir: 180,
						windpow: 22
					}, 
					{
						day: "21",
						temperature: 29,
						hymidity: 65,
						winddir: 180,
						windpow: 22
					}, {
						day: "22",
						temperature: 28,
						hymidity: 65,
						winddir: 180,
						windpow: 22
					}, 
					{
						day: "23",
						temperature: 25,
						hymidity: 70,
						winddir: 270,
						windpow: 22
					}, 
					{
						day: "24",
						temperature: 25,
						hymidity: 70,
						winddir: 225,
						windpow: 22
					}, 
					{
						day: "25",
						temperature: 22,
						hymidity: 70,
						winddir: 270,
						windpow: 22
					},
					{
						day: "26",
						temperature: 20,
						hymidity: 75,
						winddir: 270,
						windpow: 22
					}, 
					{
						day: "27",
						temperature: 15,
						hymidity: 76,
						winddir: 270,
						windpow: 22
					}, 	
					{
						day: "28",
						temperature: 15,
						hymidity: 80,
						winddir: 270,
						windpow: 22
					}, 
					{
						day: "29",
						temperature: 15,
						hymidity: 90,
						winddir: 235,
						windpow: 22
					}, 
					{
						day: "30",
						temperature: 15,
						hymidity: 70,
						winddir: 235,
						windpow: 22
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
						winddir: 45,
						windpow: 22
					}, 
					{
						day: "02",
						temperature: 25,
						hymidity: 70,
						winddir: 45,
						windpow: 22
					}, 
					{
						day: "03",
						temperature: 25,
						hymidity: 70,
						winddir: 45,
						windpow: 22
					}, 
					{
						day: "04",
						temperature: 25,
						hymidity: 70,
						winddir: 45,
						windpow: 22
					}, 
					{
						day: "05",
						temperature: 26,
						hymidity: 60,
						winddir: 45,
						windpow: 22
					}, 
					{
						day: "06",
						temperature: 26,
						hymidity: 65,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "07",
						temperature: 25,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "08",
						temperature: 25,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "09",
						temperature: 25,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "10",
						temperature: 26,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "11",
						temperature: 23,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "12",
						temperature: 23,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "13",
						temperature: 20,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "14",
						temperature: 20,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "15",
						temperature: 20,
						hymidity: 60,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "16",
						temperature: 19,
						hymidity: 80,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "17",
						temperature: 15,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "18",
						temperature: 15,
						hymidity: 80,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "19",
						temperature: 15,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "20",
						temperature: 15,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "21",
						temperature: 15,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, {
						day: "22",
						temperature: 15,
						hymidity: 90,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "23",
						temperature: 15,
						hymidity: 90,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "24",
						temperature: 15,
						hymidity: 90,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "25",
						temperature: 15,
						hymidity: 90,
						winddir: 135,
						windpow: 22
					},
					{
						day: "26",
						temperature: 15,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "27",
						temperature: 20,
						hymidity: 70,
						winddir: 180,
						windpow: 22
					}, 	
					{
						day: "28",
						temperature: 22,
						hymidity: 72,
						winddir: 180,
						windpow: 22
					}, 
					{
						day: "29",
						temperature: 25,
						hymidity: 70,
						winddir: 180,
						windpow: 22
					}, 
					{
						day: "30",
						temperature: 29,
						hymidity: 63,
						winddir: 180,
						windpow: 22
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
						winddir: 180,
						windpow: 22
					}, 
					{
						day: "02",
						temperature: 22,
						hymidity: 71,
						winddir: 180,
						windpow: 22
					}, 
					{
						day: "03",
						temperature: 15,
						hymidity: 70,
						winddir: 180,
						windpow: 22
					}, 
					{
						day: "04",
						temperature: 21,
						hymidity: 74,
						winddir: 180,
						windpow: 22
					}, 
					{
						day: "05",
						temperature: 25,
						hymidity: 80,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "06",
						temperature: 21,
						hymidity: 72,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "07",
						temperature: 20,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "08",
						temperature: 20,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "09",
						temperature: 14,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "10",
						temperature: 21,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "11",
						temperature: 25,
						hymidity: 75,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "12",
						temperature: 25,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "13",
						temperature: 25,
						hymidity: 72,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "14",
						temperature: 25,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "15",
						temperature: 28,
						hymidity: 76,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "16",
						temperature: 40,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "17",
						temperature: 30,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "18",
						temperature: 28,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "19",
						temperature: 29,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "20",
						temperature: 30,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "21",
						temperature: 30,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, {
						day: "22",
						temperature: 30,
						hymidity: 70,
						winddir: 135,
						windpow: 32
					}, 
					{
						day: "23",
						temperature: 30,
						hymidity: 70,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "24",
						temperature: 32,
						hymidity: 50,
						winddir: 135,
						windpow: 22
					}, 
					{
						day: "25",
						temperature: 32,
						hymidity: 60,
						winddir: 90,
						windpow: 22
					},
					{
						day: "26",
						temperature: 30,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "27",
						temperature: 30,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 	
					{
						day: "28",
						temperature: 35,
						hymidity: 70,
						winddir: 90,
						windpow: 52
					}, 
					{
						day: "29",
						temperature: 36,
						hymidity: 50,
						winddir: 90,
						windpow: 22
					}, 
					{
						day: "30",
						temperature: 34,
						hymidity: 50,
						winddir: 90,
						windpow: 22
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
						winddir: 0,
						windpow: 22
					}, 
					{
						day: "02",
						temperature: 15,
						hymidity: 90,
						winddir:  0,
						windpow: 22
					}, 
					{
						day: "03",
						temperature: 15,
						hymidity: 90,
						winddir: 0,
						windpow: 22
					}, 
					{
						day: "04",
						temperature: 15,
						hymidity: 90,
						winddir: 0,
						windpow: 22
					}, 
					{
						day: "05",
						temperature: 15,
						hymidity: 90,
						winddir: 0,
						windpow: 22
					}, 
					{
						day: "06",
						temperature: 16,
						hymidity: 70,
						winddir: 0,
						windpow: 22
					}, 
					{
						day: "07",
						temperature: 20,
						hymidity: 95,
						winddir: 0,
						windpow: 22
					}, 
					{
						day: "08",
						temperature: 20,
						hymidity: 95,
						winddir: 0,
						windpow: 22						
					}, 
					{
						day: "09",
						temperature: 20,
						hymidity: 95,
						winddir: 0,
						windpow: 22						
					}, 
					{
						day: "10",
						temperature: 14,
						hymidity: 95,
						winddir: 0,
						windpow: 67						
					}, 
					{
						day: "11",
						temperature: 19,
						hymidity: 99,
						winddir: 0,
						windpow: 22
					}, 
					{
						day: "12",
						temperature: 19,
						hymidity: 99,
						winddir: 0,
						windpow: 22
					}, 
					{
						day: "13",
						temperature: 15,
						hymidity: 80,
						winddir:  0,
						windpow: 22
					}, 
					{
						day: "14",
						temperature: 15,
						hymidity: 98,
						winddir: 0,
						windpow: 22
					}, 
					{
						day: "15",
						temperature: 15,
						hymidity: 98,
						winddir: 0,
						windpow: 22						
					}, 
					{
						day: "16",
						temperature: 15,
						hymidity: 98,
						winddir: 45,
						windpow: 82						
					}, 
					{
						day: "17",
						temperature: 14,
						hymidity: 98,
						winddir: 45,
						windpow: 22						
					}, 
					{
						day: "18",
						temperature: 15,
						hymidity: 97,
						winddir: 45,
						windpow: 22	
					}, 
					{
						day: "19",
						temperature: 15,
						hymidity: 97,
						winddir: 45,
						windpow: 22	
					}, 
					{
						day: "20",
						temperature: 15,
						hymidity: 96,
						winddir: 45,
						windpow: 22	
					}, 
					{
						day: "21",
						temperature: 15,
						hymidity: 96,
						winddir:  45,
						windpow: 72
					}, {
						day: "22",
						temperature: 15,
						hymidity: 90,
						winddir:  45,
						windpow: 22
					}, 
					{
						day: "23",
						temperature: 15,
						hymidity: 90,
						winddir: 45,
						windpow: 22						
					}, 
					{
						day: "24",
						temperature: 15,
						hymidity: 90,
						winddir: 45,
						windpow: 22	
					}, 
					{
						day: "25",
						temperature: 15,
						hymidity: 90,
						winddir: 45,
						windpow: 22	
					},
					{
						day: "26",
						temperature: 15,
						hymidity: 96,
						winddir: 45,
						windpow: 42	
					}, 
					{
						day: "27",
						temperature: 16,
						hymidity: 70,
						winddir: 90,
						windpow: 22
					}, 	
					{
						day: "28",
						temperature: 20,
						hymidity: 70,
						winddir: 45,
						windpow: 62
					}, 
					{
						day: "29",
						temperature: 25,
						hymidity: 70,
						winddir:  45,
						windpow: 22
					}, 
					{
						day: "30",
						temperature: 26,
						hymidity: 70,
						winddir:  45,
						windpow: 22
					}, 
				]	
		},
	];
	// search prevailing wind of city
	var searchCityWindDir = function(cityName){
		var sum = 0;
		var count = 0;
		var result;
		for(var i = 0; i < catalog.length; i++){
			if(cityName == catalog[i].cityName){
				for(var j = 0; j < catalog[i].days.length; j++){
						sum += catalog[i].days[j].winddir;
						count++;
				}
			}
			
		}
		result = (sum / count).toFixed();
		//console.log (result);
		return result;
	}
	//searchCityWindDir("Kyiv");
	
	// search prevailing wind 
	
	var searchWindDirection = function(){
		var sum = 0;
		var count = 0;
		var result;
		for(var i = 0; i < catalog.length; i++){
			for(var j = 0; j < catalog[i].days.length; j++){
					sum += catalog[i].days[j].winddir;
					count++;
			}
			}
		result = (sum / 120).toFixed();
		//console.log (result);
		return result;
	}
	//searchWindDirection();
	
	//search average values
	
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
		result = (sum / temp.length).toFixed(2);
		//console.log (result);
		return result;
	}
	//searchAvgTemp();
	
	var searchAvgHymid = function(){
		var result = 0;
		var sum = 0;
		var hymid = [];
		for(var i = 0; i < catalog.length; i++){
			
			for(var j = 0; j < catalog[i].days.length; j++){
				hymid.push(catalog[i].days[j].hymidity)
				
			}
		}
		//console.log(temp);
		for(var i = 0; i < hymid.length; i++){
			sum += hymid[i];
		}
		result = (sum / hymid.length).toFixed(2);
		//console.log (result);
		return result;
	}
	//searchAvgHymid();
	
	var searchAvgWindPow = function(){
		var result = 0;
		var sum = 0;
		var wind = [];
		for(var i = 0; i < catalog.length; i++){
			
			for(var j = 0; j < catalog[i].days.length; j++){
				wind.push(catalog[i].days[j].windpow)
				
			}
		}
		//console.log(temp);
		for(var i = 0; i < wind.length; i++){
			sum += wind[i];
		}
		result = (sum / wind.length).toFixed(2);
		//console.log (result);
		return result;
	}
	//searchAvgWindPow();
	
	
	// search average values of each city
	
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
	
	var searchAvgCityHymid = function(cityName){
		var result = 0;
		var sum = 0;
		var hymid = [];
		for(var i = 0; i < catalog.length; i++){
			if(cityName == catalog[i].cityName){
				for(var j = 0; j < catalog[i].days.length; j++){
					hymid.push(catalog[i].days[j].hymidity)
					
				}
			}	
		}
		console.log(hymid);
		for(var i = 0; i < hymid.length; i++){
			sum += hymid[i];
		}
		result = sum / hymid.length;
		//console.log (result.toFixed(2));
		return result.toFixed(2);
	}
	//searchAvgCityHymid("London");
	
	var searchAvgCityWindPow = function(cityName){
		var result = 0;
		var sum = 0;
		var windpow = [];
		for(var i = 0; i < catalog.length; i++){
			if(cityName == catalog[i].cityName){
				for(var j = 0; j < catalog[i].days.length; j++){
					windpow.push(catalog[i].days[j].windpow)
					
				}
			}	
		}
		console.log(windpow);
		for(var i = 0; i < windpow.length; i++){
			sum += windpow[i];
		}
		result = sum / windpow.length;
		//console.log (result.toFixed(2));
		return result.toFixed(2);
	}
	//searchAvgCityWindPow("London");
	
	//search maximal values 
	
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
	
	var searchMaxWindPow = function(){
		var wind = [];
		var max = -Infinity;
		var day;
		var city;
		for(var i = 0; i < catalog.length; i++){
			
			for(var j = 0; j < catalog[i].days.length; j++){
				wind.push(catalog[i].days[j].windpow)
				if(max < catalog[i].days[j].windpow){
					max = catalog[i].days[j].windpow;
					day = catalog[i].days[j].day;
					city = catalog[i].cityName;
				}
				
			}
		}
		//console.log(wind);
		//console.log(max);
		//console.log(day);
		//console.log(city);
		return max;
		return day;
		return city;
	}
	//searchMaxWindPow();
	
	return{
		searchCityWindDir: searchCityWindDir,
		searchWindDirection: searchWindDirection,
		searchAvgTemp: searchAvgTemp,
		searchAvgHymid: searchAvgHymid,
		searchAvgWindPow: searchAvgWindPow,
		searchAvgCityTemp: searchAvgCityTemp,
		searchAvgCityHymid: searchAvgCityHymid,
		searchAvgCityWindPow: searchAvgCityWindPow,
		searchMaxTemp: searchMaxTemp,
		searchMaxHymid: searchMaxHymid,
		searchMaxWindPow: searchMaxWindPow
	}
})();