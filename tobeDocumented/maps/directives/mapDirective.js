/**
 * Directive googleMaps : handles the timeline UI.
 *
 * @Module mapController.
 *
 * @Dependancies timeline: factory under map mapServices.
 *
 * @Watching : mapcontrols.
 *
 * @param mapcontrols.currentIndecatorDate() : sets indicator according to input.
 * @param mapcontrols.trigertimeMachineFromUi () : trigers timeline.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */


/*global mapController*/

mapController.directive('googleMaps', ['timeline', function (timeline) {
	
	"use strict";
	
	function link(scope, el, attr) {
		
		scope.mapcontrols.currentIndecatorDate = function () {

			scope.mapcontrols.settings.curIndecatorDate = timeline.currentIndecatorDate(scope.mapcontrols.settings);
		};
		
		scope.mapcontrols.trigertimeMachineFromUi = function ($event) {
			
			timeline.moveInTimeByIncrementTimeIndicatorFromCurrentTimeStampToEnd(scope.mapcontrols, $event);
		
		};
	
	}
	
	return {
		
        link : link,
        restrict : 'E',
        scope : {
			
			mapcontrols : '='
		}
	};
}]);
