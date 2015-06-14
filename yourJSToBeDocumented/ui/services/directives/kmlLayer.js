/*global uiServices*/

/**   
*
* @framework angular  
* @kind jsConcept  
* @type directive
* @name kmlLayer
* @memberof module:uiServices
*
* @Description   Sets kml Layer on the map.
*
* @requires kmlLayer+module:mapModule.kmlLayer
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


uiServices.directive('kmlLayer', ['kmlLayer', function (kmlLayer) {
	
	"use strict";

    /**
    *   
    * @function 
    * @name anonymous 
    * @param {Object} scope
    * @param {Object} el
    * @param {Object} attr
    *
    * @memberof module:uiServices.kmlLayer
    *
    * @Description Watching {@link module:mapModule.mapController.$scope.map map} 
    * 
    */
    
	function link(scope, el, attr) {
	
        /**
        *   
        * @class
        * @name scope  
        * @memberof module:uiServices.kmlLayer.anonymous
        *
        * @classdesc  Directive's local scope: {@link module:mapModule.mapController.$scope.map map}.
        * 
        */
     
        /**
        *   
        * @event 
        * @name $watch 
        * @type {listener}
        * @param {Integer} kmlLayer
        * @memberof module:uiServices.kmlLayer.anonymous.scope
        *
        * @Description When kmkl layer is selected, {@link module:mapModule.heatMap kmlLayer.set} API service is been used to apply new kml to the map.
        *
        */
        
		scope.$watch('mapcontrols.settings.selectedLayer', function (layer) { //Watch selected Layer.
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				kmlLayer.set(scope.mapcontrols.settings);// Set Opacity to HeatMap stored in settings.
			}
		});
	}
    
    /**
    * 
    * @member
    * @name return 
    * @memberof module:uiServices.kmlLayer
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