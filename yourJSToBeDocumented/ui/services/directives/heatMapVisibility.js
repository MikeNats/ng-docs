/*global uiServices*/


/**   
*
* @framework angular  
* @kind jsConcept  
* @type directive
* @name heatMapVisibility
* @memberof module:uiServices
*
* @Description  Sets the heatMap  visibility.
*
* @requires heatMap+module:mapModule.heatMap
* @requires timeline+module:mapModule.timeline
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


uiServices.directive('heatMapVisibility', ['heatMap', 'timeline', function (heatMap, timeline) {
	
	"use strict";

    /**
    *   
    * @function 
    * @name anonymous 
    * @param {Object} scope
    * @param {Object} el
    * @param {Object} attr
    *
    * @memberof module:uiServices.heatMapVisibility
    *
    * @Description  Sets the heatMap  visibility.
    * 
    */
    
	function link(scope, el, attr) {
        
	    /**
        *   
        * @class
        * @name scope  
        * @memberof module:uiServices.heatMapVisibility.anonymous
        *
        * @classdesc  Directive's local scope: {@link module:mapModule.mapController.$scope.map map}.
        * 
        */
     
        /**
        *   
        * @event 
        * @name $watch 
        * @type {listener}
        * @param {Integer} showHeatMap
        * @memberof module:uiServices.heatMapVisibility.anonymous.scope
        *
        * @Description When heatmap visibility changes, {@link module:mapModule.heatMap heatMap.toggleView} API service to toggles on/off heatMap.
        *
        * If timeline is on,  {@link module:mapModule.timeline timeline.bindMaptoTimeline} API service is been used to toggles on/off the heatMap to map timeline.
        *
        */
        
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

    /**
    * 
    * @member
    * @name return 
    * @memberof module:uiServices.heatMapVisibility
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