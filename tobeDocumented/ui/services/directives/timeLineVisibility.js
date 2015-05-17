/**
 * Directive timeLineVisibility : sets the timeLine Visibility.
 *
 * @Module uiServices. 
 *
 * @Dependancies  timeline, markers, heatMap:  factories under mapServices module.
 *
 * @Watching : from object mapcontrols attribute settings.showMarkers.
  *
 * @see mapcontrols.readyToUse : false when template is loaded  for performace issues.
 * @see mapcontrols.settings.showMarkers : Markers visibility.
 * @see mapcontrols.settings.showHeatMap :HeatMap visibility.
 * @see mapcontrols.settings.timeline.indicator : current month in  timeline,  
 * @return atribute : time-line-visibility.
 *
 * @param markers.set() : initialize timeline.
 * @param markers.get() : gets data producted by initializing timeline.
 * @param markers.toggleView() : toggles on/off Markers.
 * @param timeline.timeMachine() : appends heatMap layer and Markers according to current month and visibility.
 * @param timeline.clearTimeMachine() : empty  heatmap layer & markers obejct array used by timeline factory.
 * This function is called when timeline is on, to empty cashed layers from previous usage.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */
   
/*global uiServices */


uiServices.directive('timeLineVisibility', ['timeline', 'markers', 'heatMap', function (timeline, markers, heatMap) { // Debendancies injection.
	
	"use strict";
	
	function link(scope, el, attr) {
		
		scope.$watch('mapcontrols.settings.showTimeLine', function (showtimeline) { //Watch markers, toogle view
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				if (scope.mapcontrols.settings.timeline === undefined) {//if timeline activated by ui the first time
					
					timeline.set(scope.mapcontrols.settings.response); //Initialize
					scope.mapcontrols.settings.timeline = timeline.get();//push timeline to settings.timeline
				
				}
				if (showtimeline) {//TimeLine is on
					
					timeline.timeMachine(scope.mapcontrols.settings.response, scope.mapcontrols.settings.timeline.indicator, scope.mapcontrols.settings);//Initialize timeMachine
					
					/* Variables that are used to display dates in userInterface */
                    scope.mapcontrols.settings.zeroBasedMinMonth = timeline.zeroBasedMonth(scope.mapcontrols.settings.timeline.dates.minMonth);
                    scope.mapcontrols.settings.zeroBasedMaxMonth = timeline.zeroBasedMonth(scope.mapcontrols.settings.timeline.dates.maxMonth);
                     

                } else {//TimeLine is off
					
					if (scope.mapcontrols.settings.showMarkers) {//Markers on
						
						markers.toggleView(scope.mapcontrols.settings);//Markers off

					}
					if (scope.mapcontrols.settings.showHeatMap) {//HeatMap on
						
						timeline.clearTimeMachine();//clear chashed heatmaps
						scope.mapcontrols.settings.heatMap = heatMap.get(scope.mapcontrols.settings);//append heatmap with all data

					}
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