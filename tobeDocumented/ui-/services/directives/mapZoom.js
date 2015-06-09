/**
 * Directive zoomHandler : sets the zoom level of the map.
 * @Module uiServices. 
 * @Dependancies : gMap factory under mapServices module.
 * @Watching : from object mapcontrols attribute settings.zoom.
 *
 * @param gMap.set() : sets the zoom and centers the map. 
 *
 * @see mapcontrols.readyToUse : false when template is loaded  for performace issues.
 * @return atribute : zoom-handler.
 * 
 *
 * @author : Michail Tsougkranis.
 * @version :1.0. 
 * @since : 1.3.9.
 */

/*global uiServices */


uiServices.directive('zoomHandler', ['gMap', function (gMap) {
	
	"use strict";
	
	function link(scope, el, attr) {
		
		scope.$watch('mapcontrols.settings.zoom', function (zoom) {  // Watching Map zoom.
			
			if (scope.mapcontrols.settings.allow === true) {  // True when  User starts to interact with ui.
				
				scope.mapcontrols.settings.map.setOptions(gMap.set(zoom, scope.mapcontrols.settings));  // Set zoom in Map stored in settings.
			}
		});
	}
	return {
		
		link : link,
		restrict : 'A',
		scope: {
			
			mapcontrols : '='
			
		}
	};
}]);