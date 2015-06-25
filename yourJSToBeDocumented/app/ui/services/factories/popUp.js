/*global uiServices */
/*global angular */

/**   
* @framework angular  
* @kind jsConcept  
* @type factory
* @name popUp
* @memberof module:uiServices
* @requires uiAnimation+module:uiServices.uiAnimation
* @Description  Reusable modal window.
*
* By decleraring the function {@link module:uiServices.mainAppController popUp.togglePopUp()} under the {@link module:uiServices.mainAppController mainAppController} we made availiable to the hole App the modal window.
*
*
*
* @example -
* // Attache the popUp.togglePopUp() that is availiable in all App throught mainAppController. 
* // Attache a custom  customPopulateMyModal() that will invoke popUp.populate(content)  etc..
* // The customPopulateMyModal() can be decleared in directives or controllers with injecting popUp service
* 
* <button ng-click='popUp.togglePopUp();populateMyModal();'></button> 
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/

   
uiServices.factory('popUp', ['UiAnimation', function (UiAnimation) {
	
	"use strict";
    
	return {
	
        /** 
        * @function 
        * @name populate
        * @memberof module:uiServices.popUp 
        * @param {String} content
        * @public
        * @static
		* @Description Poplulates modal window with content If the modal has no error class
        */
        
		populate : function (content) {
			
			if (!angular.element(document.getElementById('alertPopUp')).children().hasClass('error')) {//If no error class
				
				angular.element(document.getElementById('alertPopUp')).children('article').children('div').empty();//empty modal
                
				angular.element(document.getElementById('alertPopUp')).children('article').children('div').append(content);//populate modal
				
			}
			
		},
		
		
        /** 
        * @function 
        * @name populate
        * @memberof module:uiServices.popUp 
        * @param no-argument
        * @public
        * @static
		* @Description Emptie's modal content
        */
        
		clear : function (content) {
			
			angular.element(document.getElementById('alertPopUp')).children('article').children('div').empty();
		},
	   
        /** 
        * @function 
        * @name togglePopUp
        * @memberof module:uiServices.popUp 
        * @param {DOMElement} element
        * @public
        * @static
		* @Description Emptie's modal content show/hide modal by toggling activePopUp class
        */
		togglePopUp : function (element) {
			
			var currentElement = angular.element(document.getElementById('alertPopUp'));
			
			if (currentElement.hasClass('activePopUp')) {
				
				UiAnimation.linear(1, 0, 0.1, 'opacity', currentElement, 300);
				UiAnimation.linear(0, -1, 10, 'zIndex', currentElement, 5);
				currentElement.removeClass('activePopUp');
				
			} else {
				
				UiAnimation.linear(0, 1.1, 0.1, 'opacity', currentElement, 300);
				UiAnimation.linear(-1, 99, 10, 'zIndex', currentElement, 5);
				currentElement.addClass('activePopUp');
			}
		}
	};
}]);
