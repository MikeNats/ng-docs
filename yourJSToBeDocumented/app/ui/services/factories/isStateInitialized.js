/*global angular*/
/*global uiServices*/
/**
* @framework angular  
* @kind jsConcept  
* @type factory
* @name isSateInitialized
* @memberof module:uiServices
* @requires isSateInitialized
* @requires $q
* @Description  page state promise 
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9
 */




uiServices.factory('isSateInitialized', ['$rootScope', '$q', function ($rootScope, $q) {
    
    'use strict';
    
    /** 
    * @class
    * @name isStateInit  
    * @memberof module:uiServices.isSateInitialized
    * @classdesc  Promise that page changed succesfully
    */
    
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

 


