/**
 * Directive heatMapVisibility : sets the heatMap  visibility.
 * @Module uiServices. 
 * @Dependancies : heatMap & timeline factories under mapServices module.
 * @Watching : from object mapcontrols attribute settings.showHeatMap.
 *
 * @param heatMap.toggleView() : toggles on/off heatMap.
 * @param timeline.timeMachine() : appends heatMap layer and Markers according to current month and visibility.
 * @param timeline.clearTimeMachine() : empty  heatmap layer & markers obejct array used by timeline factory.
 * This function is called when timeline is on, to empty cashed layers from previous usage.
 *
 * @see mapcontrols.readyToUse : false when template is loaded  for performace issues.
 * @see mapcontrols.settings.showTimeLine : timeLine visibility.
 * @see mapcontrols.settings.timeline.indicator : current month in  timeline,  
 * @return atribute : heat-map-visibility.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */


uiServices.directive('heatMapVisibility', ['heatMap', 'timeline', function (heatMap, timeline) {
	
	"use strict";
	
	function link(scope, el, attr) {
		
		scope.$watch('mapcontrols.settings.showHeatMap', function (showHeatMap) { // Watch showHeatMap 
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				if (scope.mapcontrols.settings.showTimeLine) {// Timeline is on.
					
					if (showHeatMap) {// HeatMap is on.
						
						heatMap.toggleView(scope.mapcontrols.settings);//HeatMap off
					}
					
					timeline.bindMaptoTimeline(scope.mapcontrols.settings, false); // Initialize timeline.
				
				} else {// Timeline is Off.
					
					heatMap.toggleView(scope.mapcontrols.settings);//HeatMap On
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