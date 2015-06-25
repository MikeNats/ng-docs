/*global angular*/
/*global uiServices*/

   
/**   
* @framework angular  
* @kind jsConcept  
* @type controller
* @name mapController
* @memberof module:uiServices
* @Description Initialize an Instance of GooleMaps and its features according to settings object fetched from url.
* @requires $rootScope
* @requires $scope
* @requires $stateParams
* @requires gMapsLib+module:mapModule.gMapsLib
* @requires gMap+module:mapModule.gMap
* @requires deleteHeadScripts+module:mapModule.deleteHeadScripts
* @author Michail Tsougkranis
* @version 1.0 
* @since Angular.1.3.9     
*/


uiServices.controller('mapController', ['$rootScope', '$stateParams', '$scope', 'gMapsLib', 'gMap', 'deleteHeadScripts', function ($rootScope, $stateParams, $scope, gMapsLib, gMap, deleteHeadScripts) {
 
    /**   
    * @class
    * @name $scope  
    * @memberof module:uiServices.mapController
    * @classdesc  Controller's local scope.
    */
    
    "use strict";
	
    /**   
    * @member 
    * @name urlVariables  
    * @memberof module:uiServices.mapController.$scope
    * @Description  varriables fetched from {@link $stateParams.path}
    */
	
	$scope.urlVariables = JSON.parse($stateParams.path);
    
	console.log('insideController', $scope.urlVariables);
    /**  
    * @class 
    * @name map  
    * @memberof module:uiServices.mapController.$scope
    * @classdesc  Object attached to controllers {@link module:mapModule.mapController $scope}.
    *
    * Encapsulates map data.
    *
    * The most important Object in the App.
    *
    * In that Object settings and the cutom view of the map is been stored, and is the one that is been stringified and turned into url for publishing the map.
    * 
    */
	
    $scope.map = {
		
		urlVariables : $scope.urlVariables,
		/**   
		* @property 
		* @name settings
		* @memberof module:uiServices.mapController.$scope.map
		* @Description settings of the map initialy are been fetched throught URL  
		*
		* Using {@link $stateParams} service
		*/
         
        settings : $scope.urlVariables.settings//parse url parameters as json
    };
    
    /**   
    * @function 
    * @name mapsInitialized
    * @type {Promise}
    * @memberof module:uiServices.mapController
    * @Description  Promise is been fulfilled  when google Maps script is appended.
    * When the Promised is been fulfied:
    * > Google Map is been appeded with the use of {@link module:mapModule.gMap gMap.append} API.
    *
    * > Google Maps features are been initialized with the use of {@link module:mapModule.gMap gMap.features} API.  
    * 
    * > Settings {@link module:mapModule.mapController.$scope $scope.map.settings} are been updated.  
    */
    
    gMapsLib.mapsInitialized.then(function () {//Promise fullfiled when google maps Head Script is appened.
    
        //settings are been updated  with the nw features
        $scope.map.settings = gMap.features(gMap.append($scope.map.settings));//Initiate gmap features
     
    });
    
    /** 
    * @event 
    * @name $stateChangeStart
    * @type {listener}
    * @memberof module:uiServices.mapController
    * @Description on $stateChangeStart && curent template is customap:
    *
    * > Using {@link module:uiServices.deleteHeadScripts  deleteHeadScripts.exclude} service API clears Google Map Script
    *
    * > Deletes #map-canvas {@link HTML-tag}
    *
    * > Reinitialize {@link $scope.map.settings.map} Object
    */
    
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {//When user leave the template
        
        if ($rootScope.$state.$current.name === 'customap') {//If the template is the customap
            
            /* Set delete gmap, relevant script and set settings map  to null */
            
            $scope.map.settings.map = null;
            $scope.map.settings.allow  = false;
            
            angular.element(document.getElementById('map-canvas')).empty();
            
        //    deleteHeadScripts.exclude(['appScripts']);
        }
    });
}]);


