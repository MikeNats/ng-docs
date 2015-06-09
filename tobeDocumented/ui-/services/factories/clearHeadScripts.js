/**
 * Factory deleteHeadScripts : Deletes all head scripts exept given.
 *
 * @Module uiServices. 
 *
 * @param script.filterSelectedElements : Replace's with 0  matched elements in array script.selectedElements.
 * @param script.deleteSelectedElements : Removes from DOM elements stored in script.selectedElements array.
 *
 * @see script : private object.
 * @see script.selectedElements : Headr Scripts DOM selection.
 * @return exclude([exclude]) : Remove Head Scripts exept given exclude.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */
/*global angular */
/*jslint plusplus: true */

uiServices.factory('deleteHeadScripts', [function () {
	"use strict";
	var script = {
		selectedElements : document.getElementsByTagName('script'),//DOM Selectection
		
		filterSelectedElements: function (exclude) {
			
			var j, i;
			
			for (j = 0; j < exclude.length; j++) {//For each excluded script
				
				for (i = 0; i < script.selectedElements.length; i++) {//Itterate DOM Selectection
					
					if (angular.element(script.selectedElements[i]).attr('id') !== exclude[j]) { //If given maches
						
						script.selectedElements[i] = 0;//remove element from Element Array
					}
				}
			}
			script.deleteSelectedElements();
		},
		
		deleteSelectedElements : function () {//Remove remain selected script
			
			var i;
			
			for (i = 0; i < script.selectedElements.length; i++) {
				
				if (script.selectedElements[i] !== 0) {
					
					angular.element(script.selectedElements[i]).remove();
				}
			}
		}
	};
	
	return {
		
		exclude : function (exclude) {
			
			script.filterSelectedElements(exclude);
			
		}
		
	};
}]);