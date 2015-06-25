/*global uiServices */
/*global angular */
/*global google*/


/**   
* @framework angular  
* @kind jsConcept  
* @type directive
* @name setMapPosition
* @memberof module:uiServices
* @Description  Sets map position.
* @requires gMap+module:mapModule.gMap
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


uiServices.directive('setMapPosition', ['gMap', function (gMap) {
	
	"use strict";
    
    /** 
    * @function 
    * @name anonymous 
    * @param {Object} scope
    * @param {Object} el
    * @param {Object} attr
    * @memberof module:uiServices.setMapPosition
    */
    
    function link(scope, el, attr) {

        /**
        * @class
        * @name scope  
        * @memberof module:uiServices.setMapPosition.anonymous
        * @classdesc  Directive's local scope: {@link module:mapModule.mapController.$scope.map mapcontrols}.
        */
     
        /** 
        * @member 
        * @name setMapPosition 
        * @param {Object} DOMElement
        * @memberof module:uiServices.setMapPosition.anonymous.scope
        * @Description Updates  Lat/Lot of the map and to {@link module:mapModule.mapController.$scope.map mapcontrols} Object according to user interaction with UI.
        */
        
		scope.mapcontrols.setMapPosition = function (event) {
			
			var step = 0.3,//Every time that the user clicks on the arrows maps is repositioned by that offset.
				currentElement = angular.element(event.currentTarget);//Selection of clicked element.
			
			/**  Check the direction and calculate new offset **/
			if (currentElement.hasClass('topAr')) {//North
				
				scope.mapcontrols.settings.mapLang = +scope.mapcontrols.settings.mapLang + step;
				
			} else if (currentElement.hasClass('bottomAr')) {//South
				
				scope.mapcontrols.settings.mapLang = +scope.mapcontrols.settings.mapLang - step;
			
			} else if (currentElement.hasClass('lefAr')) {//West
				
				scope.mapcontrols.settings.mapLong = +scope.mapcontrols.settings.mapLong - step;
			
			} else {//East
				
				scope.mapcontrols.settings.mapLong = +scope.mapcontrols.settings.mapLong + step;
			
			}
			
			scope.mapcontrols.settings.map.setCenter(new google.maps.LatLng(+scope.mapcontrols.settings.mapLang, +scope.mapcontrols.settings.mapLong));//SetMap NewPosition
		
		};
        
        /**
        * @member 
        * @name resetPosition 
        * @param no-arguments
        * @memberof module:uiServices.setMapPosition.anonymous.scope
        * @Description Resets Lat/Lot of Map using  {@link module:mapModule.gMap gMap.reset} API service.
        */
        
		scope.mapcontrols.resetPosition = function () {
			scope.mapcontrols.settings.zoom = 60;
			scope.mapcontrols.settings.map.setOptions(gMap.reset(scope.mapcontrols.settings));
		};
	}
    
    /**
    * @member
    * @name return 
    * @memberof module:uiServices.setMapPosition
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