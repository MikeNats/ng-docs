/**
 * Service uiAnimation : Custom implementation of Jquery animate.
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


uiServices.service('uiAnimation', ['$interval', function ($interval) {

	"use strict";
	
	this.calulateVelocity = function (cssCurrentValue, endingCssValue, step, animationSpeed) { //calculates the time needed for each itteration to be ecceuted

		if (this.operationHandler(cssCurrentValue, endingCssValue) === 'accending') {

			return animationSpeed / ((endingCssValue - cssCurrentValue) / step);

		} else {

			return animationSpeed / ((cssCurrentValue - endingCssValue) / step);
		}
	};

	this.operationHandler = function (cssCurrentValue, endingCssValue) {// compeares  cssCurrentValue  with endingCssValue

		if (cssCurrentValue < endingCssValue) {

			return 'accending';

		} else {

			return 'descending';

		}

	};

	this.linear = function (cssCurrentValue, endingCssValue, step, cssAttribute, targetElement, animationSpeed) {//Implements linear animation

		var stopAnimation = false,
			operation =  this.operationHandler(cssCurrentValue, endingCssValue),
			velocity = this.calulateVelocity(cssCurrentValue, endingCssValue, step, animationSpeed),
			inisiate = $interval(function () {
				
				if (operation === 'accending') {
					
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
					
					$interval.cancel(inisiate);
				
				}
			}, velocity);
	};

}]);
