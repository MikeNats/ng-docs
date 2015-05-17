/**
 * Factory gMapsLib : return a promise that a google map canvas has been successfully loaded:
 * 1)Appends google map lybrary (script) 
 * 2)Returns a promise when the callback googleMapsInitialized is loaded. 
 *
 * @Module mapServices.
 *
 * @Dependancies  $q,$window.
 *
 * @see mapsDefer : private promise.
 * 
 * @param asyncLoad() : appends google Maps Library.
 * @param $window.googleMapsInitialize() : callback function called after gmap library is loaded and  resolves the promised.
 *
 * 
 * @return mapsInitialized : promise that gmap library  and the callback has been loaded.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */


/*global angular */
var mapServices =  angular.module('mapServicesFactoryModule', []);

mapServices.factory('gMapsLib', ['$q', '$window', function ($q, $window) {
    
    "use strict";
    
    var mapsDefer = $q.defer(),
        
        asyncUrl = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + '&libraries=visualization&callback=',    // Google's url for async maps initialization accepting callback function
        
        asyncLoad = function (asyncUrl, callbackName) { // async loader
        
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.id = 'googleMapsApi';
            script.src = asyncUrl + callbackName;
            document.body.appendChild(script);
        };
    
    // callback function - resolving promise after maps successfully loaded
    $window.googleMapsInitialized = function () {
        
        mapsDefer.resolve();
    };
    
    // loading google maps
    asyncLoad(asyncUrl, 'googleMapsInitialized');
    
    
    return {
        
        mapsInitialized : mapsDefer.promise
    
    };
}]);
