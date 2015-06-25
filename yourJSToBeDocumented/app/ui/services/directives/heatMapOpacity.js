/*global uiServices*/


/**   
* @framework angular  
* @kind jsConcept  
* @type directive
* @name heatMapOpacity
* @memberof module:uiServices
* @Description  On heatmap opacity change, new heatMap opacity is been applied to the map.
* @requires heatMap+module:mapModule.heatMap
* @requires timeline+module:mapModule.timeline
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/




uiServices.directive('heatMapOpacity', ['heatMap', 'timeline', function (heatMap, timeline) {
	
	"use strict";
   
    /**  
    * @function 
    * @name anonymous 
    * @param {Object} scope
    * @param {Object} el
    * @param {Object} attr
    * @memberof module:uiServices.heatMapOpacity
    * @Description Watching {@link module:mapModule.mapController.$scope.map mapcontrols} 
    */
    
	function link(scope, el, attr) {
   
        /**   
        * @class
        * @name scope  
        * @memberof module:uiServices.heatMapOpacity.anonymous
        * @classdesc  Directive's local scope: {@link module:mapModule.mapController.$scope.map map}.
        */
     
        /**
        * @event 
        * @name $watch 
        * @type {listener}
        * @param {Integer} heatMapOpacity
        * @memberof module:uiServices.heatMapOpacity.anonymous.scope
        * @Description When heatmap opacity changes, {@link module:mapModule.heatMap heatMap.setRadius} API service is been used to apply new opacity to the map.
        *
        * If timeline is on,  {@link module:mapModule.timeline timeline.bindMaptoTimeline} API service is been used to apply new opacity to the map timeline.
        */
        
		scope.$watch('mapcontrols.settings.heatMapOpacity', function (heatMapOpacity) { //Watch  HeatMap Opacity 
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				heatMap.setOpacity(scope.mapcontrols.settings);// Set Opacity to HeatMap stored in settings
				
				if (scope.mapcontrols.settings.showTimeLine) {// Timeline is on
					
					timeline.bindMaptoTimeline(scope.mapcontrols.settings, true); // Initialize timeline with new HeatMap.
				
				}
			}
		});
	}

   /**
    * @member
    * @name return 
    * @memberof module:uiServices.heatMapOpacity
    * @public
    * @return {Object} 
    * @Description Wired with  {@link module:mapModule.mapController.$scope.map  mapcontrols} Object: {@link '='}
    *
    * Type: {@link HTML-Attribute} 
    */
    
	return {
		
		link : link,
		restrict : 'A',
		scope: {
			
			mapcontrols : '='
			
		}
	};
}]);
