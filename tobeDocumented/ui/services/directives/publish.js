/**
 * Directive publishAndSave : create a url with nesesacry variables for embading the map into iframe.
 * @Module uiServices.
 * @Dependancies popUp:  factory under uiServices module.
 * @Dependancies  errorHandler:  factory under Map module.
 *
 * @param popUp.populate : trigers the pop up. 
 *
 * @see seetingsToString : temp variable.
 * @throws errorHandler: An error occured in publish function 
 * @return atribute : publish.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */
/*global templateUrl */


uiServices.directive('publish', ['popUp', 'errorHandler', function (popUp, errorHandler) { // Debendancies injection.
	
	"use strict";
	
	function link(scope, el, attr) {
		
		scope.mapcontrols.publish = function () { //create a url with nesesacry variables for embading the map into iframe.
			
			var seetingsToString = {},
				attribute,
				temSettings = Object.create(scope.mapcontrols.settings);
			
			temSettings.allow = false;
			temSettings.markers = [];
			
			/*jshint -W089 */
			for (attribute in temSettings) {
				
				//if (temSettings.hasOwnProperty(attribute)) {

				if (attribute !== 'response' && attribute !== 'map'  && attribute !== 'heatMap' && attribute !== 'heatmap'  && attribute !== 'layers' && attribute !== 'animate' && attribute !== 'errorHandler' && attribute !== 'findMinMaxDates'  && attribute !== 'monthAsNumber'   && attribute !== 'resetHeatMapMemory'   && attribute !== 'resetHeatMapMemory' && attribute !== 'setMinMaxDates'  && attribute !== 'setMinMaxDetailedDates' && attribute !== 'visibleCoords'  && attribute !== 'layerObject'   && attribute !== 'cashedHeatMapsBackrward') {
					
					seetingsToString[attribute] = temSettings[attribute];
						
				}
					
			//	}
				
			}
			
			popUp.populate('<p style="font-size:12px;float:left;">' + templateUrl + '/index.html#/map/' + errorHandler.settingsParseJson(seetingsToString) + '</p>');
			
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