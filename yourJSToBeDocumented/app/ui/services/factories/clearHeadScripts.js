/*jshint -W020 */
/*global uiServices */
/*global angular */
/*jslint plusplus: true */


/**   
* @framework angular  
* @kind jsConcept  
* @type factory
* @name deleteHeadScripts
* @memberof module:uiServices
* @Description  Delete's all head scripts exept given.
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/

uiServices.factory('deleteHeadScripts', [function () {
	
    "use strict";

    /** 
    * @class 
    * @name script  
    * @memberof module:uiServices.deleteHeadScripts
    * @classdesc  Encapulates delete HeadScripts functionality
    */
    
    var script = {

        /** 
        * @member
        * @name selectedElements
        * @type {array} DOMElements
        * @memberof module:uiServices.deleteHeadScripts.script
		* @Description DOM selection of all head scripts
        */
        
        selectedElements : document.getElementsByTagName('script'),//DOM Selectection

        /** 
        * @member
        * @name filterSelectedElements
        * @memberof module:uiServices.deleteHeadScripts.script
        * @param {String} exclude
		* @Description much the scipt from a given name with the script in  the array   {@link module:uiServices.deleteHeadScripts.script script.selectedElements} and removes it.
        *
        * Invoke {@link module:uiServices.deleteHeadScripts.scrip script.deleteSelectedElements}
        */
        
		filterSelectedElements: function (exclude) {
			
			var j, i;
			
			for (j = 0; j < exclude.length; j++) {//For each excluded script
				
				for (i = 0; i < script.selectedElements.length; i++) {//Itterate DOM Selectection
					
					if (angular.element(script.selectedElements[i]).attr('id') !== exclude[j]) { //If given maches
						
						script.selectedElements[i] = null;//remove element from Element Array 
					}
				}
			}
			script.deleteSelectedElements();
		},
	   
        /** 
        * @member
        * @name deleteSelectedElements
        * @memberof module:uiServices.deleteHeadScripts.script
        * @param no-arguments
		* @Description Removes all head script that are inside  {@link module:uiServices.deleteHeadScripts.script script.selectedElements
        */
		deleteSelectedElements : function () {//Remove remain selected script
			
			var i;
			
			for (i = 0; i < script.selectedElements.length; i++) {
				
				if (script.selectedElements[i] !== null) {
					
					angular.element(script.selectedElements[i]).remove();
				}
			}
		}
	};
	
	return {
        
        /** 
        * @function 
        * @name linear
        * @memberof module:uiServices.deleteHeadScripts 
        * @param {String} exclude
        * @public
        * @static
		* @Description Triger the removal of the Head Scripts exept the {@link exclude}.
        */
		
		exclude : function (exclude) {

			try {
                
                script.filterSelectedElements(exclude);
                
            } catch (e) {
            
                console.log(e);
            }
			
		}
		
	};
}]);