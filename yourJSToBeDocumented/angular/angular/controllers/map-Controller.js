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


uiServices.controller('mapController', ['$rootScope', '$stateParams', '$scope', 'gMapsLib', 'gMap', 'deleteHeadScripts', 'Session', 'modelBuilder', 'timeline', function ($rootScope, $stateParams, $scope, gMapsLib, gMap, deleteHeadScripts, Session, modelBuilder, timeline) {
 
    /**   
    * @class
    * @name $scope  
    * @memberof module:uiServices.mapController
    * @classdesc  Controller's local scope.
    */
    
    "use strict";

    /**   
    * @member 
    * @name projectNumber  
    * @type {Integer}
    * @memberof module:uiServices.mapController.$scope
    * @Description position of the Session.project array. Fetched from url
    */
	
	$scope.projectNumber = JSON.parse($stateParams.path);
    
   
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
	

  

    $scope.project = Session.projects[$scope.projectNumber];
    

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
    $scope.project.executeVisualization = function () {
        
        gMapsLib.mapsInitialized.then(function () {//Promise fullfiled when google maps Head Script is appened.

            //settings are been updated  with the nw features
            $scope.project.settings = gMap.features(gMap.append(modelBuilder.data($scope.project.settings)), $scope.project.projectId);//Initiate gmap features

        });
    
    };
    
    $scope.project.executeVisualization();
    
    
    $scope.$on('refresh-Map', function(event, args) {
        
        $scope.project.executeVisualization();
        
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
        
        if ($rootScope.$state.$current.name === 'custom-visualization') {//If the template is the customap
            
            /* Set delete gmap, relevant script and set settings map  to null */
            
            $scope.project.settings.map = null;
            
            $scope.project.settings.allow  = false;
            
            Session.projects[$scope.projectNumber].settings = modelBuilder.data($scope.project.settings);
        
            
            
            
            angular.element(document.getElementById('map-canvas')).empty();
            
           // deleteHeadScripts.exclude(['appScripts']);
        }
    });
}]);


