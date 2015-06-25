/*global angular*/
/*global uiServices*/

   
/**   
* @framework angular  
* @kind jsConcept  
* @type controller
* @name viewMapController
* @memberof module:uiServices
* @Description Initialize an Instance of GooleMaps and its features according to settings object fetched from url
* @requires $scope
* @requires $stateParams
* @requires gMapsLib+module:mapModule.gMapsLib
* @requires gMap+module:mapModule.gMap
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


uiServices.controller('viewMapController', ['$stateParams', '$scope', 'gMapsLib', 'gMap', function ($stateParams, $scope, gMapsLib, gMap) {

    /**    
    * @class
    * @name $scope  
    * @memberof module:mapModule.viewMapController
    * @classdesc  Controller's local scope.
    */
    
    "use strict";
    
    /**   
    * @class 
    * @name map  
    * @memberof module:uiServices.viewMapController.$scope
    * @classdesc  Object attached to controllers {@link module:mapModule.mapController $scope}.
    *
    * Encapsulates map data.
    *
    * The most important Object in the App.
    *
    * In that Object settings and the cutom view of the map is been stored, and is the one that is been stringified and turned into url for publishing the map.
    */
    
    $scope.map = {
 
    /**   
    * @property 
    * @name settings
    * @memberof module:uiServices.viewMapController.$scope.map
    * @Description settings of the map initialy are been fetched throught URL  
    *
    * Using {@link $stateParams} service
    */
        
        settings : JSON.parse($stateParams.path)//parse url parameters as json
    
    };
    
    /**   
    * @function 
    * @name mapsInitialized
    * @type {Promise}
    * @memberof module:uiServices.viewMapController
    * @Description  Promise is been fulfilled  when google Maps script is appended.
    * When the Promised is been fulfied:
    * > Google Map is been appeded with the use of {@link module:mapModule.gMap gMap.append} API.
    *
    * > Google Maps features are been initialized with the use of {@link module:mapModule.gMap gMap.features} API.  
    *
    * > Settings {@link module:mapModule.mapController.$scope $scope.map.settings} are been updated.  
    * 
    */
    
    
    gMapsLib.mapsInitialized.then(function () {//Promise fullfiled when google maps Head Script is appened. 
        
         //settings are been updated  with the nw features
        
        $scope.map.settings = gMap.features(gMap.append($scope.map.settings));//Initiate gmap features
    
    });
    
}]);


