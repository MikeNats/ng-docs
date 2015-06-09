/**
 * Directive heatMapOpacity : sets the heatMap opacity of the map.
 * @Module uiServices. 
 * @Dependancies : heatMap & timeline factories under mapServices module.
 * @Watching : from object mapcontrols attribute settings.heatMapOpacity.
 *
 * @param heatMap.setOpacity() : sets heatMap  Opacity.
 * @param timeline.timeMachine() : appends heatMap layer and Markers according to current month and visibility.
 * @param timeline.clearTimeMachine() : empty  heatmap layer & markers obejct array used by timeline factory.
 * @param heatMap.disConstruct() : sets null the heatMap kept in settings .
 * This function is called when timeline is on, to empty cashed layers from previous usage.
 *
 * @see mapcontrols.readyToUse : false when template is loaded  for performace issues.
 * @see mapcontrols.settings.showTimeLine : timeLine visibility.
 * @see mapcontrols.settings.timeline.indicator : current month in  timeline,  
 * @return atribute : heat-map-opacity. 
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */


uiServices.directive('heatMapOpacity', ['heatMap', 'timeline', function (heatMap, timeline) {
	
	"use strict";
	
	function link(scope, el, attr) {
		
		scope.$watch('mapcontrols.settings.heatMapOpacity', function (heatMapOpacity) { //Watch  HeatMap Opacity 
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				heatMap.setOpacity(scope.mapcontrols.settings);// Set Opacity to HeatMap stored in settings
				
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
