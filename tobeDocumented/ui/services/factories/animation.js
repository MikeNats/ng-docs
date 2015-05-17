/**
 * Factory uiAnimation : Custom implementation of Jquery animate.
 * @Module uiServices. 
 * @Dependancies  $interval.
 *
 * @param animation.calulateVelocity() : calculates the time needed for each itteration to be executed.
 * @param animation.operation() : return the type of operation  accending || descending.
 * @param animation.linear() : linear increse of a value with given step  based on interval represented as velocity.
 *
 * @see animation : private object.
 * @see animation.inisiate : interval implementation.  
 * @return linear : implements animation.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */
 
/*global uiServices */

uiServices.factory('uiAnimation', [ '$interval', function ($interval) {
	"use strict";
	var animation = {
		inisiate : null
	};
	
	animation.calulateVelocity = function (cssCurrentValue, endingCssValue, step, animationSpeed) { //calculates the time needed for each itteration to be executed
		
		if (animation.operation(cssCurrentValue, endingCssValue) === 'accending') {
			
			return animationSpeed / ((endingCssValue - cssCurrentValue) / step);
			
		} else {
			
			return animationSpeed / ((cssCurrentValue - endingCssValue) / step);
			
		}
	};
	
	animation.operation = function (cssCurrentValue, endingCssValue) {// compeares  cssCurrentValue  with endingCssValue
		
		if (cssCurrentValue < endingCssValue) {
			
			return 'accending';
			
		} else {
			
			return 'descending';
		}
	};
	
	animation.linear = function (cssCurrentValue, endingCssValue, step, cssAttribute, targetElement, animationSpeed) {//Implements linear animation
		
		var stopAnimation = false,
			operation =  animation.operation(cssCurrentValue, endingCssValue),
			velocity = animation.calulateVelocity(cssCurrentValue, endingCssValue, step, animationSpeed);
		
		animation.inisiate = $interval(function () {
			
			if (operation  === 'accending') {
				if (cssCurrentValue <= endingCssValue) {
					cssCurrentValue = cssCurrentValue + step;
				} else {
					stopAnimation = true;
				}
				
			} else {
				
				if (cssCurrentValue >= endingCssValue) {
					cssCurrentValue = cssCurrentValue - step;
				} else {
					stopAnimation = true;
				}
			}
			
			targetElement.css(cssAttribute, cssCurrentValue);
			
			if (stopAnimation) {
				$interval.cancel(animation.inisiate);
			}
			
		}, velocity);
	};
	
	return {
		
		linear : function (cssCurrentValue, endingCssValue, step, cssAttribute, targetElement, animationSpeed) {
			
			animation.linear(cssCurrentValue, endingCssValue, step, cssAttribute, targetElement, animationSpeed);
			
		}
		
	};
}]);
