/*global uiServices*/


/**   
*
* @framework angular  
* @kind jsConcept  
* @type directive
* @name timeIndicator
* @memberof module:uiServices
*
* @Description   Sets throught ranged bar the view of the selected  timeStamp in map's timeLine
*
* @requires timeline+module:mapModule.timeline
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/



uiServices.directive('timeIndicator', ['timeline', function (timeline) {
	
	"use strict";

    /**
    *   
    * @function 
    * @name anonymous 
    * @param {Object} scope
    * @param {Object} el
    * @param {Object} attr
    *
    * @memberof module:uiServices.timeIndicator
    *
    * @Description Watching {@link module:mapModule.mapController.$scope.map mapcontrols} 
    * 
    */
    
    function link(scope, el, attr) {

        /**
        *   
        * @class
        * @name scope  
        * @memberof module:uiServices.timeIndicator.anonymous
        *
        * @classdesc  Directive's local scope: {@link module:mapModule.mapController.$scope.map map}.
        * 
        */
     
        /**
        *   
        * @event 
        * @name $watch 
        * @type {listener}
        * @param {Integer} indicator
        * @memberof module:uiServices.timeIndicator.anonymous.scope
        *
        * @Description Map view is been updated as the USER interacts with the timeline range bar.
        * 
        * Timeline range bar indicator represent the current time stamp of the map.
        *
        * As the value of the indecator is been increased and decresed accordingly  by the user,
        *
        * indicator's value is been used to determine what  view  will be append  on the map for the selected timestamp.
        *
        * Two time indicators are been used:
        *
        * - {@link indicator} : that represent the new selected timestamp and is been watched by the Directive.
        *
        * - {@link cashedIndicator} : that represent the timestamp that the map view was set since the last USER interaction with timeline range bar.
        *
        * {@link module:mapModule.timeline timeline.timeMachine}: takes as argumets {@link indicator} and {@link cashedIndicator} and implements the alternation of the views, between these ywo timestamp.
        */

		
		scope.$watch('mapcontrols.settings.timeline.indicator', function (indicator) { //Watch indicator
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				scope.mapcontrols.currentIndecatorDate();//Get current date.This function has been added dinamily to the  scope.mapcontrols when Timeline was inisialized its functionality can be found ton timeline factory
				
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
    
   /**
    * 
    * @member
    * @name return 
    * @memberof module:uiServices.timeIndicator
    * @public
    * @return {Object} 
    * @Description Wired with  {@link module:mapModule.mapController.$scope.map  mapcontrols} Object: {@link '='}
    *
    * Type: {@link HTML-Attribute} 
    *
    */
	return {
		
		link : link,
		restrict : 'A',
		scope: {
			
			mapcontrols : '='
			
		}
	};
}]);