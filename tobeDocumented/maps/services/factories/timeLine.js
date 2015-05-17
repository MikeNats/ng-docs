/**
 * Factory timeline :  provides all the functionality of timeline. 
 *
 * @Module mapServices.
 *
 * @Dependancies  heatMap : factory under mapServices.
 * @Dependancies  heatMap : $interval.
 *
 * @see timeline : private object.
 * @see timelineMemory : private object.
 * 
 * @param  timeline.setMinMaxDetailedDates() : Converts mm/dd/yyyy  JavaScript dates .
 * @param  timeline.findZeroBasedMonth() : Return months in  zerobased format if month is earliear than Octomber
 * @param  timeline.currentIndicator() : Given the current date that is represented on the map Returns an integer represantation of the month having as a domain the spectrum of starting and ending date. 
 * @param  timeline.incrementTimeIndicator() : Uses $interval to automaticlly increment the TimeIndicator up untill it reach the a given date.
 * @param  timeline.incrementTimeIndicatorFromCurrentTimeStampToEnd(): Uses $interval to automaticlly increment the TimeIndicator up untill it reach the final date.
 * @param  timeline.findMinMaxDates() : Finds the earliest & latest date.
 * @param  timeline.errorHandler() : Validates that the dates is in the right format.
 * @param  timeline.setMinMaxDates(): Sets min max Dates.
 * @param  timeline.totalMonth(): Finds and returns as integer the number of the total number of months.
 * @param timeline.monthAsNumber() : Given a month inside the timeline range returns its position. 
 * @param timeline.resetHeatMapMemory(): As timeline is been implemented, multiple heatmap layers are been apeended on map. Its reference of these layers are been stored in 2 tables: cashedHeatMapsBackrward,                cashedHeatMapsForward accorting with how the timeline is been accessed. resetHeatMapMemory deletes the heatmaps by setting them with null
 *  
 * @param timeline.visibleCoords () : Given a current timestamp itterates all the dates and ditermibnes witch set of LatLot should be visible. 
 * @param timeline.animate() : Constract and dDescontract multiple heatmap and markers layers as the timeline Indicator is moving forword and backword.
 
 * @return set : sets and initialize the timeline object and all the map layers for timeline implementation.
 * @return get : returns timeline object
 * @return clearTimeMachine : all timline map layers are been disconstracted.
 * @return timeMachine : timeline is been moved to given timestamp.
 * @return zeroBasedMonth : returns a 2 digit representation of a month if month < Octomber.
 * @return  currentIndecatorDate: mach indicator integer value to a date. 
 * @return  moveInTimeByIncrementTimeIndicator: Indicator is moving one timestamp backwords or forwords.
 * @return  moveInTimeByIncrementTimeIndicatorFromCurrentTimeStampToEnd: Indicator is moving one timestamp  forwords  till the last timestamp. 
 * @return  reinisializes timeline when map attributes is changed
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */




/*global mapServices*/
/*global angular*/
/*global google*/

mapServices.factory('timeline', ['$interval', 'heatMap', function ($interval, heatMap) {
    
    "use strict";
    
    var timeline = {
        
        indicator : 0,
        clicked : 0,
        acceptableCoords : [],
        cashedIndicator : 0
    },
        timelineMemory = {
            
            cashedHeatMapsForward : [],
            cashedHeatMapsBackrward : []
        };

    //Converts mm/dd/yyyy  JavaScript dates 
	timeline.setMinMaxDetailedDates = function () {
  
		timeline.dates.minMonth = timeline.dates.minDate.getMonth();

		timeline.dates.minYear = timeline.dates.minDate.getFullYear();
	    
	    timeline.dates.maxMonth =  timeline.dates.maxDate.getMonth();

	    timeline.dates.maxYear =  timeline.dates.maxDate.getFullYear();


	};
    
    //Returns month in  zerobased format if month is earliear than Octomber
	timeline.findZeroBasedMonth = function (month) {
        
        month =  month + 1; //JavaScript  months start from 0

        if (month < 10) {
            
            month = '0' + month;
        }
        return month;
        
    };

    //Given the current date that is represented on the map Returns an integer represantation of the month having as a domain the spectrum of starting and ending date. 
	timeline.currentIndicator  = function (settings) {

		var curIndecatorDate = {},
            monthOffset  = +(+settings.timeline.dates.minMonth + (+settings.timeline.indicator)),
            remainingMonths,
            remainingYear;
        
        if (monthOffset < 12) {
                
            curIndecatorDate.month = monthOffset;
            curIndecatorDate.year = settings.timeline.dates.minYear;
        
        } else if (monthOffset >= 12) {
            
            remainingMonths = monthOffset - 12;
            
            remainingYear = 1;
            
            while (remainingMonths > 12) {
                
                remainingYear += 1;
                remainingMonths = remainingMonths - 12;
            }
            
            curIndecatorDate.month = remainingMonths;
            curIndecatorDate.year = settings.timeline.dates.minYear + remainingYear;
        
        }
        
        curIndecatorDate.month  =   timeline.findZeroBasedMonth(curIndecatorDate.month);
        
        remainingYear = 0;
        remainingMonths = 0;
        
        return curIndecatorDate;
    
    };
   
    //Uses $interval to automaticlly increment the TimeIndicator up untill it reach the final date of the domain.
    timeline.incrementTimeIndicator = function (mapcontrols) {
        
        mapcontrols.interval =  $interval(function () {
            
            mapcontrols.timeLineClicked = true;//add clicked calss to button
            
            if (mapcontrols.settings.timeline.indicator < mapcontrols.settings.timeline.totalMonths) {//if is not the last time stamp
                
                mapcontrols.settings.timeline.indicator += 1;

            } else {
                
                mapcontrols.timeLineClicked = false; // remove clicked class from button
                $interval.cancel(mapcontrols.interval);//stop timeMachine
            
            }
            
            timeline.currentIndicator(mapcontrols.settings);
        
        }, 950);
    
    };
    
    //Uses $interval to automaticlly increment the TimeIndicator up untill it reach the final date.
    timeline.incrementTimeIndicatorFromCurrentTimeStampToEnd = function (mapcontrols, $event) {
        
        if (!angular.element($event.currentTarget).hasClass('clicked') &&  mapcontrols.settings.timeline.indicator < mapcontrols.settings.timeline.totalMonths) { //if timeMachine is inactive

            if (mapcontrols.settings.timeline.indicator !== 10) {//if its  not in the last time stamp
                  
                timeline.incrementTimeIndicator(mapcontrols); //move in time

            } else if (mapcontrols.settings.timeline.indicator > 10) {//if it is in the last timestamp

                mapcontrols.settings.timeline.indicator = 0;//time indicator set to initial time stamp
                timeline.incrementTimeIndicator(mapcontrols); //move in time
            }
        
        } else if (mapcontrols.settings.timeline.indicator >= mapcontrols.settings.timeline.totalMonths) {
            
            mapcontrols.settings.timeline.indicator = 0;//time indicator set to initial time stamp
            timeline.incrementTimeIndicator(mapcontrols); //move in time
        
        } else {// if timeMachine is active
            
            mapcontrols.timeLineClicked = false; // remove clicked class from button
            $interval.cancel(mapcontrols.interval);//stop timeMachine 
        }
    
    };

	//Finds the earliest & latest date.
	timeline.findMinMaxDates = function (currentDate) {
        
        if (timeline.dates.minDate >= currentDate) {//finds min date
            
            timeline.dates.minDate =  currentDate;
        }
        if (timeline.dates.maxDate <= currentDate) {//finds max date
            
            timeline.dates.maxDate =  currentDate;
        }
	};
	
	//Validates that the date is in the right format
	timeline.errorHandler = function (date, recordNo) {

		//Date error handling
		if (isNaN(date.getMonth()) || date === undefined || date === '') {
            
            throw {
				name: 'CSVError',
				message: 'Date in row: ' + (recordNo + 1) + ' is wrong. Correct format month/day/year. '
			};

		}

		return date;
	};

	//Sets min max Dates
    timeline.setMinMaxDates = function (response) {
        
        var recordNo;
        
	    //initializatioin of max min dates
		timeline.dates = {
            
            minDate : new Date(response[0].STARTING_DATE),
            maxDate : new Date(response[0].STARTING_DATE)

		};
        
        for (recordNo in response) {
            
            if (response.hasOwnProperty(recordNo)) {
               
                //create Date instance
                response[recordNo].STARTING_DATE = timeline.errorHandler(new Date(response[recordNo].STARTING_DATE), recordNo);

			     //Finds the min max dates
                timeline.findMinMaxDates(response[recordNo].STARTING_DATE);
            
            
            }
        
        }
        
        //convert date into integer
		timeline.setMinMaxDetailedDates();



	};

    //Finds and returns as integer the number of the total number of months.
	timeline.totalMonth = function (maxYear, maxMonth, currentYear, currentMonth) {
        
        var numberOfMonths = 12,
            years = maxYear -  currentYear,
            months;
        
        if (years > 1) {
            
            years = years * numberOfMonths;
        
        } else {

			years = 0;

		}
        months =  (numberOfMonths - (currentMonth + 1) + (maxMonth + 1));

		

		return years + months;
    
    };

    // Given a month inside the timeline range returns its position. 
	timeline.monthAsNumber = function (currentYear, currentMonth) {
        
        return (timeline.dates.maxYear - currentYear) * 12 + (timeline.dates.maxMonth - currentMonth);

	};

    //As timeline is been implemented, multiple heatmap layers are been apeended on map. Its reference of these layers are been stored in 2 tables: cashedHeatMapsBackrward, cashedHeatMapsForward accorting with how the timeline is been accessed. resetHeatMapMemory deletes the heatmaps by setting them with null
	timeline.resetHeatMapMemory = function () {
        
        var i;
        
        for (i = 0; i <= timelineMemory.cashedHeatMapsBackrward.length; i += 1) {

            if (timelineMemory.cashedHeatMapsBackrward[i] !== undefined) {
                
                timelineMemory.cashedHeatMapsBackrward[i].setMap(null);
            }
        
        }
        
        for (i = 0; i <= timelineMemory.cashedHeatMapsForward.length; i += 1) {

            if (timelineMemory.cashedHeatMapsForward[i] !== undefined) {
                
                timelineMemory.cashedHeatMapsForward[i].setMap(null);
            }
        
        }
    
    };

    //Given a current timestamp itterates all the dates and ditermibnes witch set of LatLot should be visible. 
	timeline.visibleCoords = function (response, timeIndicator, settings) {
				
		var  registry,
			monthAsNumber;
		
		for (registry in response) {
			
			if (response.hasOwnProperty(registry)) {
				
				if (settings.showMarkers) {
					
					settings.markers[registry].setMap(null);
				
				}
				
				monthAsNumber = timeline.monthAsNumber(response[registry].STARTING_DATE.getFullYear(), response[registry].STARTING_DATE.getMonth());
				
				
				if ((timeline.totalMonths - monthAsNumber) <= timeIndicator) { //set coordination up timeIndicator time stamp
					
					if (settings.showMarkers) { //if markers view is selected 
						
						settings.markers[registry].setMap(settings.map);
					
					}
					
					if (settings.showHeatMap) { //if markers view is selected
							
						try {

							timeline.acceptableCoords.push(new google.maps.LatLng(response[registry].LATITUDE, response[registry].LONGITUDE));

						} catch (e) {
							
							//console.log('Exeption in timeline.visibleCoords trying to instanciate google maps');
						
						}
					}
				
				}
			
			}
		
		}
	
	};

    //Constract and dDescontract multiple heatmap and markers layers as the timeline Indicator is moving forword and backword.
	timeline.animate = function (response, timeIndicator, settings, direction) {
        
		var data,
			i;
		
		heatMap.disConstruct(settings);

		timeline.visibleCoords(response, timeIndicator, settings);

		try {
			
			data = new google.maps.MVCArray(timeline.acceptableCoords);

		} catch (e) {

			//console.log('Exeption in timeline.animate trying to instanciate google maps');
		}
		
		if (settings.showHeatMap) { //if markers view is selected 
			
			if (direction === 'forward') {
				
				
				timelineMemory.cashedHeatMapsForward.push(heatMap.construct(settings, timeline.acceptableCoords));
				
				if (timelineMemory.cashedHeatMapsBackrward[i] !== undefined  &&  timelineMemory.cashedHeatMapsBackrward.length > 0) {
					
					for (i = 0; i <= timelineMemory.cashedHeatMapsBackrward.length; i += 1) {
						
						timelineMemory.cashedHeatMapsBackrward[i].setMap(null);
					}
				
				}
			
			} else {
				
				if (timelineMemory.cashedHeatMapsForward !== undefined  &&  timelineMemory.cashedHeatMapsForward.length > 0) {
					
					for (i = 0; i <= timelineMemory.cashedHeatMapsForward.length; i += 1) {
						
						if (timelineMemory.cashedHeatMapsBackrward[i] !== undefined) {
							
							timelineMemory.cashedHeatMapsBackrward[i].setMap(null);
							
						}
						
						if (timelineMemory.cashedHeatMapsForward[i] !== undefined) {
							
							timelineMemory.cashedHeatMapsForward[i].setMap(null);
						
						}
					}
				
				}
				
				timelineMemory.cashedHeatMapsBackrward.push(heatMap.construct(settings, timeline.acceptableCoords));
			}
			
			timeline.acceptableCoords = [];
		
		}
	
	};
	
	return {
		
        //sets and initialize the timeline object and all the map layers for timeline implementation.
		set : function (response) {
			
			try {

				timeline.setMinMaxDates(response);
				timeline.totalMonths = timeline.totalMonth(timeline.dates.maxYear, timeline.dates.maxMonth, timeline.dates.minYear, timeline.dates.minMonth);
				
			} catch (e) {

				//	console.log('Exeption in timeline retunr set trying to set time');
			}
			
		},

        //returns timeline object
		get : function () {

			return timeline;

		},

        //all timline map layers are been disconstracted
		clearTimeMachine : function () {

			timeline.resetHeatMapMemory();
		},

        //timeline is been moved to given timestamp
		timeMachine : function (response, timeIndicator, settings, direction) {
			
			timeline.animate(response, timeIndicator, settings, direction);
		},
		
        //returns a 2 digit representation of a month if month < Octomber
		zeroBasedMonth : function (month) {

			return timeline.findZeroBasedMonth(month);
			
		},
        
        //mach indicator integer value to a date
		currentIndecatorDate : function (settings) {

			return timeline.currentIndicator(settings);

		},
        
        //Indicator is moving one timestamp backwords or forwords
		moveInTimeByIncrementTimeIndicator : function (mapcontrolsObj) {
			
			return timeline.incrementTimeIndicator(mapcontrolsObj);

		},
        
        //Indicator is moving one timestamp  forwords  till the last timestamp
		moveInTimeByIncrementTimeIndicatorFromCurrentTimeStampToEnd : function (mapcontrolsObj, $event) {
			
			timeline.incrementTimeIndicatorFromCurrentTimeStampToEnd(mapcontrolsObj, $event);

		},
		
        //reinisializes timeline when map attributes is changed
		bindMaptoTimeline : function (settings, resetHetMap) {

			/* Timeline must be reinisialized when map attributes is changed.
			* Timeline animation appends multiple heatMap layers.
			* HeatMap layers are stored in an object array in timeline service under timelineMemory object.
			* Timeline reinitialization is been achived by:
			* i) Setting null the Heatmap objects in timelineMemory array & clearng the timelineMemory array
			* ii) Setting null the Heatmap objects in settings,
			* iii) Settings current month as 0 (first in the range of timeline),
			* iv) Set a new timeline with a new heatMap based on the given radius.  
			*/

			timeline.resetHeatMapMemory();// Clear timelineMemory
			if (resetHetMap) {
				settings.heatMap.setMap(null);// Set null to HeatMap stored in settings
			}
			settings.timeline.indicator = 0; // Timline month to zero
			
			timeline.animate(settings.response, 0, settings, 'backward');//New timeline 
	    }
	};
}]);