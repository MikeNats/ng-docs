/**
 * Controller mapController : Initialize an Instance of GooleMaps and its features according to settings object fetched from url.
 *
 * @Module mapModule. 
 * @Dependancies  gMapsLib, gMap:  factories under mapServices module.
 *
 * @param gMapsLib.mapsInitialized : Promise is been  fulfilled  when gMaps script is appended.
 * @param gMap.append() : appends an instance of a gmap.
 * @param gMap.features() : initializes markers, heatmap, kmlLayer and timeline.
 * @param $rootScope.$on('$stateChangeStart') : trigered when leaving  template.
 * @param deleteHeadScripts.exclude('appScripts') : Delet all head Scripts exept given. 
 *
 * @see mapcontrols.settings : Settings that controls map.
 * @see mapcontrols.readyToUse : true when user starts to interact with ui.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */
   
/*global angular*/

var mapController = angular.module('mapModule', [ 'settingsProviderModule', 'mapServicesFactoryModule', 'uiServicesModule']);//Module service dependancies
 


mapController.controller('mapController', ['$rootScope', '$stateParams', '$scope', 'gMapsLib', 'gMap', 'deleteHeadScripts', function ($rootScope, $stateParams, $scope, gMapsLib, gMap, deleteHeadScripts) {
    
    "use strict";
    
    $scope.map = {
        
        settings : JSON.parse($stateParams.path)//parse url parameters as json
    };
    
    gMapsLib.mapsInitialized.then(function () {//Promise fullfiled when google maps Head Script is appened.
        
        $scope.map.settings = gMap.features(gMap.append($scope.map.settings));//Initiate gmap features
     
    });
    
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {//When user leave the template
        
        if ($rootScope.$state.$current.name === 'customap') {//If the template is the customap
            
            /* Set delete gmap, relevant script and set settings map  to null */
            
            $scope.map.settings.map = null;
            $scope.map.settings.allow  = false;
            
            angular.element(document.getElementById('map-canvas')).empty();
            
            deleteHeadScripts.exclude(['appScripts']);
        }
    });
}]);
