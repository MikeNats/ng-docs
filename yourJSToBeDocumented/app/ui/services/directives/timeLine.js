/*global uiServices*/

/** 
* @framework angular  
* @kind jsConcept  
* @type directive
* @name googleMaps
* @memberof module:uiServices
* @Description  handles the timeline UI.
* @requires timeline+module:mapModule.timeline
* @author Michail Tsougkranis
* @version 1.0 
* @since Angular.1.3.9     
*/



uiServices.directive('googleMaps', ['timeline', function (timeline) {


	"use strict";

    /**  
    * @function 
    * @name anonymous 
    * @param {Object} scope
    * @param {Object} el
    * @param {Object} attr
    * @memberof module:uiServices.googleMaps
    * @Description Extends {@link module:uiServices.mapModule.$scope.map mapcontrols} with two function to wire the UI with the {@link module:mapModule.timeline timeline} API  
    */
    
	function link(scope, el, attr) {
        /**
        * @class
        * @name scope  
        * @memberof module:uiServices.googleMaps.anonymous
        * @classdesc  Directive's local scope: {@link module:mapModule.mapController.$scope.map map}.
        */

        /**  
        * @member 
        * @name currentIndecatorDate 
        * @param no-arguments
        * @memberof module:uiServices.googleMaps.anonymous.scope
        * @Description Updates the Current Date that user see on the map by using {@link module:mapModule.timeline timeline.currentIndecatorDate}  API
        */
        
		scope.mapcontrols.currentIndecatorDate = function () {

			scope.mapcontrols.settings.curIndecatorDate = timeline.currentIndecatorDate(scope.mapcontrols.settings);
		};
        
        /**  
        * @member  
        * @name trigertimeMachineFromUi 
        * @param {DOMElement} $event
        * @memberof module:uiServices.googleMaps.anonymous.scope
        * @Description Use of {@link module:mapModule.timeline timeline.moveInTimeByIncrementTimeIndicatorFromCurrentTimeStampToEnd}  API
        */
        
		scope.mapcontrols.trigertimeMachineFromUi = function ($event) {
			
			timeline.moveInTimeByIncrementTimeIndicatorFromCurrentTimeStampToEnd(scope.mapcontrols, $event);
		
		};
	
	}
   /**
    * @member
    * @name return 
    * @memberof module:uiServices.googleMaps
    * @public
    * @return {Object} 
    * @Description Wired with  {@link module:mapModule.mapModule.$scope.map  mapcontrols} Object: {@link '='}
    *
    * Type: {@link HTML-Attribute} 
    */
	return {
		
        link : link,
        restrict : 'E',
        scope : {
			
			mapcontrols : '='
		}
	};
}]);
