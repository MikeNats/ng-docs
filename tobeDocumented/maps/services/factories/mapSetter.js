/**
 * Factory gMap : Appends a google maps and trigers its features. 
 *
 * @Module mapServices.
 *
 * @see map : private object.
 * 
 * @param   map.set() : returns nessesary options for the creation of a map.
 * 
 * @return append : create a new intsance of a map.
 * @return reset : use the default map option to reset the map.
 * @return set : sets the options of the current map instance.
 * @return removeMap : removes the google map lybrary.
 * @return features : trigers the features of the google map according to the settings values.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */



/*global mapServices*/
/*global google*/
/*global angular*/
/*global apiResponse*/


mapServices.factory('gMap', ['fetchDataFromCsvFactory', 'machPostCodeTo', 'kmlLayer', 'markers', 'heatMap', 'errorHandler', 'timeline', '$q', function (fetchDataFromCsvFactory, machPostCodeTo, kmlLayer, markers, heatMap, errorHandler, timeline, $q) {
	
    "use strict";
    
	var map = {

		mapLong : -4.116037,
		mapLang : 54.3981628,
		mapOptions : {
            
            zoom : 6,
            center : null
		 
		}

	};

	map.set = function (settings) {
        
        return {
            
            zoom : +settings.zoom / 10,
            center: new google.maps.LatLng(+settings.mapLang, +settings.mapLong)
        
        };

	};
    
    return {
        
        append : function (settings) {
            
            settings.map = new google.maps.Map(document.getElementById('map-canvas'), map.set(settings));
            
            return settings;
        
        },
        
        reset : function () {
            
            return {
                
                zoom : map.mapOptions.zoom,
                center: new google.maps.LatLng(map.mapLang, map.mapLong)
            };
            
        },
        
        set : function (zoom, settings) {
            
            return {
                
                zoom : Math.floor(zoom / 10),
                center: new google.maps.LatLng(settings.mapLang, settings.mapLong)
            
            };
        },
        
        removeMap : function (settings) {
            
            var scriptElements =  angular.element(document.getElementByTagName('script'));
        
        },
        
        features : function (settings) {
            
            fetchDataFromCsvFactory.get(settings.path).then(function (response) {
                
                /* PostCodeForlatLot.get(response.POSTCODE).then(function(api.Response){settings.response = machPostCodeTo.latLot(response,api.Response);});*/
                
                settings.response =  machPostCodeTo.get(apiResponse, response);
                settings.layerObject = kmlLayer.get(settings);
                settings = markers.get(settings);
                markers.toggleView(settings);
                settings.heatMap = heatMap.get(settings);

                if (!settings.showHeatMap) {
                    
                    heatMap.toggleView(settings);
                }
                if (settings.showTimeLine) {
                    
                    timeline.set(settings.response);
                    settings.timeline = timeline.get();
                    settings.zeroBasedMinMonth = timeline.zeroBasedMonth(settings.timeline.dates.minMonth);
                    settings.zeroBasedMaxMonth = timeline.zeroBasedMonth(settings.timeline.dates.maxMonth);
                    settings.curIndecatorDate = {};
                    settings.curIndecatorDate.month = settings.zeroBasedMinMonth;
                    settings.curIndecatorDate.year = settings.timeline.dates.minYear;
                    timeline.timeMachine(settings.response, 0, settings, 'forward');



                }
                
                settings.allow = true;
            
            });
            
            return settings;
        }
    };
}]);