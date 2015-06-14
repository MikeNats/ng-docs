/*global uiServices*/

/**   
*
* @framework angular  
* @kind jsConcept  
* @type directive
* @name markersVisibility
* @memberof module:uiServices
*
* @Description Toggle map's markers visibility.
*
* @requires markers+module:mapModule.markers
* @requires timeline+module:mapModule.timeline
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


uiServices.directive('markersVisibility', ['markers', 'timeline', function (markers, timeline) { // Debendancies injection.
	
	"use strict";

    /**
    *   
    * @function 
    * @name anonymous 
    * @param {Object} scope
    * @param {Object} el
    * @param {Object} attr
    *
    * @memberof module:uiServices.markersVisibility
    *
    * @Description Watching {@link module:mapModule.mapController.$scope.map map} 
    * 
    */
    
	function link(scope, el, attr) {

        /**
        *   
        * @class
        * @name scope  
        * @memberof module:uiServices.markersVisibility.anonymous
        *
        * @classdesc  Directive's local scope: {@link module:mapModule.mapController.$scope.map map}.
        * 
        */
     
        /**
        *   
        * @event 
        * @name $watch 
        * @type {listener}
        * @param {Integer} showMarkers
        * @memberof module:uiServices.markersVisibility.anonymous.scope
        *
        * @Description When user set vissibility of the markers from UI, {@link module:mapModule.markers markers.toggleView} API service is been invocted.
        *
        * If timeline is on,  {@link module:mapModule.timeline timeline.clearTimeMachine} API service will be invocted also to rebind the change of the TimLine.
        *
        */
        
        
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

   /**
    * 
    * @member
    * @name return 
    * @memberof module:uiServices.markersVisibility
    * @type {statement} 
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