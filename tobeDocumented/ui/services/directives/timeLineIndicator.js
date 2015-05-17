/**
 * Directive timeIndicator : Sets current timeStamp in timeLine.
 * @Module uiServices. 
 * @Dependancies :  timeline factory under mapServices module.
 * @Watching : from object mapcontrols attribute settings.indicator.
 *
 * @param timeline.timeMachine() : appends heatMap layer and Markers according to current month and visibility.
 * @param timeline.currentIndecatorDate() : get as input the current indicator (0,1,2...) and return obj {month:,year:}
 *
 * @see mapcontrols.readyToUse : false when template is loaded  for performace issues.
 * @see mapcontrols.settings.timeline.indicator : current month in  timeline. 
 * @see mapcontrols.settings.timeline.showTimeLine : timeline vissibility.
 * @see mapcontrols.settings.timeline.cashedIndicator : the previous value of indicator when indicator change value in the time range.      
 * @return atribute : time-indicator.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */


uiServices.directive('timeIndicator', ['timeline', function (timeline) {
	
	"use strict";
	function link(scope, el, attr) {
		

		
		scope.$watch('mapcontrols.settings.timeline.indicator', function (indicator) { //Watch indicator
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				scope.mapcontrols.currentIndecatorDate();//Get current date
				
				if (scope.mapcontrols.settings.showTimeLine) {//TimeLine is on
					
					var direction;
					
					if (scope.mapcontrols.settings.showTimeLine && (indicator - scope.mapcontrols.settings.timeline.cashedIndicator >= 0)) {// Finds the direction that timeline is moving
						
						direction = 'forward';
					
					} else {
						
						direction =  'backward';
					}
					
					timeline.timeMachine(scope.mapcontrols.settings.response, indicator, scope.mapcontrols.settings, direction);// Animate map layers from cashedIndicator to  indecator
					scope.mapcontrols.settings.timeline.cashedIndicator  =  indicator;// Cash new time stamp
				
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