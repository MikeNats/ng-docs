/*global uiServices */

/**   
*
* @framework angular  
* @kind jsConcept  
* @type directive
* @name heatMapRadius
* @memberof module:uiServices
*
* @Description  On radius change, new heatMap radius is been applied to the map.
*
* @requires heatMap+module:mapModule.heatMap
* @requires timeline+module:mapModule.timeline
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/




uiServices.directive('heatMapRadius', ['heatMap', 'timeline', function (heatMap, timeline) {
	
	"use strict";
    
    /**
    *   
    * @function 
    * @name anonymous 
    * @param {Object} scope
    * @param {Object} el
    * @param {Object} attr
    *
    * @memberof module:uiServices.heatMapRadius
    * 
    */
    
	function link(scope, el, attr) {

        /**
        *   
        * @class
        * @name scope  
        * @memberof module:uiServices.heatMapRadius.anonymous
        *
        * @classdesc  Directive's local scope: {@link module:mapModule.mapController.$scope.map map}.
        * 
        */
     
        /**
        *   
        * @event 
        * @name $watch 
        * @type {listener}
        * @param {Integer} heatMapRadius
        * @memberof module:uiServices.heatMapRadius.anonymous.scope
        *
        * @Description When heatmap radius changes, {@link module:mapModule.heatMap heatMap.setRadius} API service is been used to apply new radius to the map.
        *
        * If timeline is on,  {@link module:mapModule.timeline timeline.bindMaptoTimeline} API service is been used to apply new radius to the map timeline.
        *
        */
        
		scope.$watch('mapcontrols.settings.heatMapRadius', function (heatMapRadius) {// Watching HeatMap Radius.
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				heatMap.setRadius(scope.mapcontrols.settings);// Set radius to HeatMap stored in settings
				
				if (scope.mapcontrols.settings.showTimeLine) {// Timeline is on
					
					timeline.bindMaptoTimeline(scope.mapcontrols.settings, true); // Initialize timeline with new HeatMap.
				}
			}
		});
	}

    /**
    * 
    * @member
    * @name return 
    * @memberof module:uiServices.heatMapRadius
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