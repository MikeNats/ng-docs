/*global uiServices*/


/**   
*
* @framework angular  
* @kind jsConcept  
* @type factory
* @name uiAnimation
* @memberof module:uiServices
*
* @Description  Custom implementation of Jquery animate.
*
* @requires $interval
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/



uiServices.factory('uiAnimation', [ '$interval', function ($interval) {
	
    "use strict";

    /**
    *   
    * @class 
    * @name animation  
    * @memberof module:uiServices.uiAnimation
    *
    * @classdesc  Encapulates animation functionality
    * 
    */
    
    var animation = {
        /** 
        *
        * @member
        * @name inisiate
        * @param no-arguments       
        * @memberof module:uiServices.uiAnimation.animation
        *
		* @Description Each time {@link module:authModule.linear animation.linear} will be invoced
        *
        * {@link inisiate} will be assigned with $interval function that will make itteration throught time by doing:
        *
        * - INCREASE or DECREASE a given CSS attribute by a give value called {@link step} up untill it reach a given ending value
        * - Assign the value new CSS value to a given DOMElement
        *
        * - CHECK if interval should be cancelled by compering the new CSS value with the given ending value 
        *
        */
        
		inisiate : null
        
	};

    /** 
    *
    * @member
    * @calulateVelocity
    * @memberof module:uiServices.uiAnimation.animation
    *
    * @param {Interger} cssCurrentValue
    * @param {Interger} endingCssValue
    * @param {Interger} step 
    * @param {Interger} animationSpeed 
    *
    * @return {Integer} 
    * 
    * @Description Calculates the velocity of the animation for its $interval iteration:
    *
    * - Calculate the scale between the initial and the ending css value according to a given offset (step), by divading the given offset (step) with the resulted CSS value from the INCREASED/DECRESED operation
    *
    * - Calculates the animation velocity by divading  the animationSpeed with the scale 
    */
    
	animation.calulateVelocity = function (cssCurrentValue, endingCssValue, step, animationSpeed) { //calculates the time needed for each itteration to be executed.
		
		if (animation.operation(cssCurrentValue, endingCssValue) === 'accending') {
			
			return animationSpeed / ((endingCssValue - cssCurrentValue) / step);
			
		} else {
			
			return animationSpeed / ((cssCurrentValue - endingCssValue) / step);
			
		}
	};
    
    /** 
    *
    * @member 
    * @name operation
    * @memberof module:uiServices.uiAnimation.animation
    *
    * @param {Interger} cssCurrentValue
    * @param {Interger} endingCssValue
    *
    * @return {String} 
    * 
    * @Description Determines what operation will be applied to the CSS values :  accending or descending the values
    */
    
	animation.operation = function (cssCurrentValue, endingCssValue) {// compeares  cssCurrentValue  with endingCssValue
		
		if (cssCurrentValue < endingCssValue) {
			
			return 'accending';
			
		} else {
			
			return 'descending';
		}
	};

    /** 
    *
    * @member 
    * @name linear
    * @memberof module:uiServices.uiAnimation.animation
    *
    * @param {Interger} cssCurrentValue
    * @param {Interger} endingCssValue
    * @param {Interger} step 
    * @param {String} cssAttribute 
    * @param {DOMElement} targetElement 
    * @param {Interger} animationSpeed 
    *
    * @Description Trigers a linear animation by invocing:
    *
    * - {@link module:authModule.uiAnimation.animation.operation operation}
    *
    * - {@link module:authModule.uiAnimation.animation.velocity velocity}
    *
    * - Assign $interval function to {@link module:uiServices.uiAnimation.animation  animation.inisiate}
    */
    
    
	animation.linear = function (cssCurrentValue, endingCssValue, step, cssAttribute, targetElement, animationSpeed) {//Implements linear animation
		
		var stopAnimation = false,
			operation =  animation.operation(cssCurrentValue, endingCssValue),//find CSS value should be  accending or descending.
			velocity = animation.calulateVelocity(cssCurrentValue, endingCssValue, step, animationSpeed);//Calculate the velocity of the animation for its $interval iteration
		
		animation.inisiate = $interval(function () {//itterate with given velocity and INCREASE or DECREASE a given CSS up untill the value reach an ending value.
			
			if (operation  === 'accending') {//if  accending add the values
				if (cssCurrentValue <= endingCssValue) {//if value has not reached given limit
                    
					cssCurrentValue = cssCurrentValue + step;
                    
				} else {// stop the animation
                    
					stopAnimation = true;
				}
				
			} else { //if  descending subtract the values
				
				if (cssCurrentValue >= endingCssValue) {//if value has not reached given limit
                    
					cssCurrentValue = cssCurrentValue - step;
                    
				} else {// stop the animation
                    
					stopAnimation = true;
				}
			}
			
			targetElement.css(cssAttribute, cssCurrentValue);//apply the new css value to the given  DOMElement
			
			if (stopAnimation) {//if true stop the animation
				$interval.cancel(animation.inisiate);
			}
			
		}, velocity);
	};
	
	return {
	   
        /** 
        *
        * @function 
        * @name linear
        * @memberof module:uiServices.uiAnimation 
        *
        * @param {Interger} cssCurrentValue
        * @param {Interger} endingCssValue
        * @param {Interger} step 
        * @param {String} cssAttribute 
        * @param {DOMElement} targetElement 
        * @param {Interger} animationSpeed
        * @public
        * @static
        *
		* @Description Triger CSS animation using {@link module:uiServices.uiAnimation.animation.linear animation.linear}.
        *
        */
        
		linear : function (cssCurrentValue, endingCssValue, step, cssAttribute, targetElement, animationSpeed) {
			
			animation.linear(cssCurrentValue, endingCssValue, step, cssAttribute, targetElement, animationSpeed);
			
		}
		
	};
}]);
