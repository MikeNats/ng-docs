/*global uiServices */

/**   
*
* @framework angular  
* @kind jsConcept  
* @type directive
* @name zoomHandler
* @memberof module:uiServices
*
* @Description  Sets the zoom level of the map.
*
* @requires gMap+module:mapModule.gMap
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/



uiServices.directive('zoomHandler', ['gMap', function (gMap) {
	
	"use strict";
    
    /**
    *   
    * @function 
    * @name anonymous 
    * @param {Object} scope
    * @param {Object} el
    * @param {Object} attr
    *
    * @memberof module:uiServices.zoomHandler
    * 
    */
    
	function link(scope, el, attr) {

        /**
        *   
        * @class
        * @name scope  
        * @memberof module:uiServices.zoomHandler.anonymous
        *
        * @classdesc  Directive's local scope: {@link module:mapModule.mapController.$scope.map map}.
        * 
        */
  
        /**
        *   
        * @event 
        * @name $watch 
        * @type {listener}
        * @param {Integer} zoom
        * @memberof module:uiServices.zoomHandler.anonymous.scope
        *
        * @Description Updates  zoom of the map and to {@link module:mapModule.gMap gMap.set} Object according to user interaction with UI.
        *
        */
        
		scope.$watch('mapcontrols.settings.zoom', function (zoom) {  // Watching Map zoom.
			
			if (scope.mapcontrols.settings.allow === true) {  // True when  User starts to interact with ui.
				scope.mapcontrols.settings.zoom = zoom;
				scope.mapcontrols.settings.map.setOptions(gMap.set(zoom, scope.mapcontrols.settings));  // Set zoom in Map stored in settings.
			}
		});
	}
    
    /**
    * 
    * @member
    * @name return 
    * @memberof module:uiServices.zoomHandler
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