/**
 * Controller mapController : Initialize an Instance of GooleMaps and its features according to settings object fetched from url.
 *
 * @Module mapController. 
 *
 * @see mapcontrols.map : Scope variable.
 *
 * @Dependancies  gMapsLib, gMap:  factories under mapServices module.
 *
 * @param gMapsLib.mapsInitialized : Promise is been  fulfilled  when gMaps script is appended.
 * @param gMap.append() : appends an instance of a gmap.
 * @param gMap.features() : initializes markers, heatmap, kmlLayer and timeline.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global mapController*/

mapController.controller('viewMapController', ['$stateParams', '$scope', 'gMapsLib', 'gMap', function ($stateParams, $scope, gMapsLib, gMap) {
    
    "use strict";
     
    $scope.map = {
        
        settings : JSON.parse($stateParams.path)//parse url parameters as json
    
    };
    
    gMapsLib.mapsInitialized.then(function () {//Promise fullfiled when google maps Head Script is appened. 
        
        $scope.map.settings = gMap.features(gMap.append($scope.map.settings));//Initiate gmap features
    
    });
    
}]);


