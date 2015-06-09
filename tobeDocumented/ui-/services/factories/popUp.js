/**
 * Factory popUp : Reusable pop up modal.
 *
 * @Module uiServices. 
 *
 * @Dependancies  uiAnimation : under uiServices module.
 *
 * @see popUp : private object.
 *
 * @param popUp.append : appends content into the popup.
 * @param popUp.empty : remove content from popup.
 *
 * @return populate(content) : appends content into the popup if popoUp has not previous showing an error message that has not been resolved.
 * @return clear(content) : empty content into the popup if popoUp has not previous showing an error message that has not been resolved.
 * @return togglePopUp(element) : animated show/hide.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */
/*global angular */

   
uiServices.factory('popUp', ['uiAnimation', function (uiAnimation) {
	
	"use strict";
    
	var popUp = {};
	
	popUp.append = function (content) {
        
		angular.element(document.getElementById('alertPopUp')).children('article').children('div').append(content);
        
	};
	
	popUp.empty = function (content) {

		angular.element(document.getElementById('alertPopUp')).children('article').children('div').empty();
	
	};
    
	return {
		
		populate : function (content) {
			
			if (!angular.element(document.getElementById('alertPopUp')).children().hasClass('error')) {
				
				angular.element(document.getElementById('alertPopUp')).children('article').children('div').empty();
				popUp.append(content);
				
			}
			
		},
		
		/*getPopUp: function(){},*/
		
		clear : function (content) {
			
			angular.element(document.getElementById('alertPopUp')).children('article').children('div').empty();
		},
		
		togglePopUp : function (element) {
			
			var currentElement = angular.element(document.getElementById('alertPopUp'));
			
			if (currentElement.hasClass('activePopUp')) {
				
				uiAnimation.linear(1, 0, 0.1, 'opacity', currentElement, 300);
				uiAnimation.linear(0, -1, 10, 'zIndex', currentElement, 5);
				currentElement.removeClass('activePopUp');
				
			} else {
				
				uiAnimation.linear(0, 1, 0.1, 'opacity', currentElement, 300);
				uiAnimation.linear(-1, 99, 10, 'zIndex', currentElement, 5);
				currentElement.addClass('activePopUp');
			}
		}
	};
}]);
