/*global uiServices */
/*global angular */

/**
*
* <b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> 
*
* <b>Parent Module:</b> {@link module:uiServicesModule uiServices} 
*
* <b>Description:</b> Controls UI Accordeon.
*
*
*
* @module  mapUiController                           
* @memberof module:uiServicesModule 
* @requires $scope+https://docs.angularjs.org/guide/scope+external
* @type controller
*
*/


uiServices.controller('mapUiController', ['$scope', function ($scope) {
	
	"use strict";
	
	/** 
    *
    * @class 
	* @name accordeon
    * @type {Object}
	* @inner
    * @classdesc
    *
    * <b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.
    *
	* <b>Description:</b>Holds accordeon functionality.
    *
    */
	
	$scope.accordeon = {//Accordeon
			
		/**  
		*
		* Trigers Accordeon functionality by detecting adding class colapse if clicked element has not colapse class.
		*
		* On success  header is visible
		*
		* @member activeTab
		* @type function
		* @inner
		* @memberof module:uiServicesModule.module:mapUiController~accordeon
		* @param {Object} DOMelement
		*
		*/
		
		activeTab : function ($event) {
			
			if (angular.element($event.currentTarget).parent().hasClass('colapse')) {
				
				angular.element($event.currentTarget).parent().removeClass('colapse');
				
			} else {
				
				angular.element(document.querySelectorAll('.accTitle')).removeClass('colapse');
				angular.element($event.currentTarget).parent().addClass('colapse');
			}
		}
		
	};
	
}]);
