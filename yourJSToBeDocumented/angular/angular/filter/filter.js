/*global angular*/
/*global uiServices*/

/**   
*
* @framework angular  
* @kind jsConcept  
* @type filter  
* @name halfFilter
* @memberof module:uiServices 
* 
* @Description Do somthing.
*
* @author Michail Tsougkranis
* @version 1.0  
* @since Angular.1.3.9     
*/



uiServices.filter('halfFilter', function () {
    
    /**
    * @function
    * @name anonymous
    * @memberof module:uiServices.halfFilter
    * @public
    * @static
    * @param {Float} input
    * @return {Float} return half value.
    * @description Returns status of authentication.
    */
    
    'use strict';
    
    return function (input) {
        
        return input / 2;
        
    };

});


 


