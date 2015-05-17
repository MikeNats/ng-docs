/**
 * Controller mapUiController : Controls Accordeon of ui.
 *
 * @Module uiServices.
 *
 * @see accordeon : scope variable.
 *
 * @param accordeon.activeTab($event) : Adds class colapse to clicked $element.
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */
/*global angular */

uiServices.controller('mapUiController', ['$scope', function ($scope) {
	
	"use strict";
	
	$scope.accordeon = {//Accordeon
		
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
