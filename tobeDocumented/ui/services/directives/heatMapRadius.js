/**
 * Directive heatMapRadius : sets the heatMap radius of the map.
 * @Module uiServices. 
 * @Dependancies : heatMap & timeline factories under mapServices module.
 * @Watching : from object mapcontrols attribute settings.heatMapRadius.
 *
 * @param heatMap.setRadius() : sets heatMap  radius.
 * @param timeline.timeMachine() : appends heatMap layer and Markers according to current month and visibility.
 * @param timeline.clearTimeMachine() : empty  heatmap layer & markers obejct array used by timeline factory.
 * @param heatMap.disConstruct() : sets null the heatMap kept in settings .
 * This function is called when timeline is on, to empty cashed layers from previous usage.
 *
 * @see mapcontrols.readyToUse : false when template is loaded  for performace issues.
 * @see mapcontrols.settings.showTimeLine : visibility of  timeLine.
 * @see mapcontrols.settings.timeline.indicator : current month in  timeline,  
 * @return atribute : heat-map-radius.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */


uiServices.directive('heatMapRadius', ['$rootScope', 'heatMap', 'timeline', function ($rootScope, heatMap, timeline) {
	
	"use strict";
	
	function link(scope, el, attr) {
		
		scope.$watch('mapcontrols.settings.heatMapRadius', function (heatMapRadius) {// Watching HeatMap Radius.
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				heatMap.setRadius(scope.mapcontrols.settings);// Set radius to HeatMap stored in settings
				
				if (scope.mapcontrols.settings.showTimeLine) {// Timeline is on
					
					timeline.bindMaptoTimeline(scope.mapcontrols.settings, true); // Initialize timeline with new HeatMap.
				}
			}
		});
	}
	return {
		
		link : link,
		restrict : 'A',
		scope: {
			
			mapcontrols : '='
			
		}
	};
}]);