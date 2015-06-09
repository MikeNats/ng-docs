/**
 * Directive setMapPosition : Sets map position.
 * @Module uiServices.
 * @Dependancies : gMap factory under mapServices module.
 *
 * @param mapcontrols.setMapPosition() : sets map position. 
 * @param map.setCenter() : sets newposition and centers the map. 
 *
 * @see step : Offset that map will move as user interacts with ui. 
 * @see currentElement : DOM selector of current clicked arrow. 
 * @see settings.mapLang : Current Latittude. 
 * @see settings.mapLong : Current Lotittude. 
 * @return atribute : set-map-position. 
 *
 * 
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */
 

/*global uiServices */
/*global angular */
/*global google*/


uiServices.directive('setMapPosition', ['gMap', function (gMap) {
	
	"use strict";
	function link(scope, el, attr) {
		
		scope.mapcontrols.setMapPosition = function (event) {
			
			var step = 0.3,//Offset.
				currentElement = angular.element(event.currentTarget);//Selection of clicked element.
			
			/**  Check the direction and calculate new offset **/
			if (currentElement.hasClass('topAr')) {
				
				scope.mapcontrols.settings.mapLang = +scope.mapcontrols.settings.mapLang + step;
				
			} else if (currentElement.hasClass('bottomAr')) {
				
				scope.mapcontrols.settings.mapLang = +scope.mapcontrols.settings.mapLang - step;
			
			} else if (currentElement.hasClass('lefAr')) {
				
				scope.mapcontrols.settings.mapLong = +scope.mapcontrols.settings.mapLong - step;
			
			} else {
				
				scope.mapcontrols.settings.mapLong = +scope.mapcontrols.settings.mapLong + step;
			
			}
			
			scope.mapcontrols.settings.map.setCenter(new google.maps.LatLng(+scope.mapcontrols.settings.mapLang, +scope.mapcontrols.settings.mapLong));//SetMap NewPosition
		
		};
		
		scope.mapcontrols.resetPosition = function () {
			
			scope.mapcontrols.settings.map.setOptions(gMap.reset());
		};
	}
	return {
		
		link : link,
		restrict : 'A',
		scope: {
			
			mapcontrols : '='
			
		}
	};
}]);