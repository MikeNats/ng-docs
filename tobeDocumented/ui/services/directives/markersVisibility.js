/**
 * Directive markersVisibility : sets the Markers Visibility.
 * @Module uiServices. 
 * @Dependancies markers, timeline:  factories under mapServices module.
 * @Watching : from object mapcontrols attribute settings.showMarkers.
 *
 * @param markers.toggleView() : toggles on/off Markers.
 * @param timeline.timeMachine() : appends heatMap layer and Markers according to current month and visibility.
 * @param timeline.clearTimeMachine() : empty  heatmap layer & markers obejct array used by timeline factory.
 * This function is called when timeline is on, to empty cashed layers from previous usage.
 *
 * @see mapcontrols.readyToUse : false when template is loaded  for performace issues.
 * @see mapcontrols.settings.showMarkers : Markers visibility.
 * @see mapcontrols.settings.timeline.indicator : current month in  timeline,
 * @see mapcontrols.settings.timeline.showTimeLine : Timeline Visibility,    
 * @return atribute : markers-visibility.
 *
 * 
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */
 
/*global uiServices */

uiServices.directive('markersVisibility', ['markers', 'timeline', function (markers, timeline) { // Debendancies injection.
	
	"use strict";
	
	function link(scope, el, attr) {
		
		scope.$watch('mapcontrols.settings.showMarkers', function (showMarkers) { //Watch showMarkers 
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				if (scope.mapcontrols.settings.showTimeLine) {//TimeLine is on
					
					if (!showMarkers) {//Markers off
						
						timeline.clearTimeMachine();//Clear timeline memory
						markers.toggleView(scope.mapcontrols.settings);//Set Markers to on
						
					}
					
					scope.mapcontrols.settings.timeline.indicator = 0;//set current month to first
					timeline.timeMachine(scope.mapcontrols.settings.response, scope.mapcontrols.settings.timeline.indicator, scope.mapcontrols.settings, scope.mapcontrols.settings.timeline.indicator);//Set timeline to first month;
				
				} else {//Markers on
					
					markers.toggleView(scope.mapcontrols.settings);//Set Markers to off
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