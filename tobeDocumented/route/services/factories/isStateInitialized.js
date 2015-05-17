/**
 * Factory isSateInitialized : page state promise 
 *
 * @Module routeSate.
 *
 * @see auth : private isStateInit.
 *
 * @preturn watching() : return a  promise.
 * @preturn getState() : returns current state.
 * @preturn done() : resolve promise and returns pageState.
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global angular*/

var routeSate =  angular.module('routeSateModule', []);

routeSate.factory('isSateInitialized', ['$rootScope', '$q', function ($rootScope, $q) {
    
    'use strict';
    
    var isStateInit = $q.defer(),
        state = {
            
            current : null
            
        };
    
    return {
        
        watching : function () {
            
            return isStateInit.promise;
            
        },
        
        getState : function () {
            
            return state.current;
            
        },
        
        done: function (currentState) {
            
            state.current = currentState;
            isStateInit.resolve();
            
        }
    };
}]);

 


