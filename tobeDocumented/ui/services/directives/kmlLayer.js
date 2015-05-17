/**
 * Directive kmlLayer : sets the kml Layer of the map.
 * @Module uiServices. 
 * @Dependancies : kmlLayer factory under mapServices module.
 * @Watching : from object mapcontrols attribute settings.selectedLayer.
 *
 * @param kmlLayer.set() : sets kml Layer to map.
 *
 * @see mapcontrols.readyToUse : false when template is loaded  for performace issues.  
 * @return atribute : kml-layer.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */


uiServices.directive('kmlLayer', ['kmlLayer', function (kmlLayer) {
	
	"use strict";
	
	function link(scope, el, attr) {
		
		scope.$watch('mapcontrols.settings.selectedLayer', function (layer) { //Watch selected Layer
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				kmlLayer.set(scope.mapcontrols.settings);// Set Opacity to HeatMap stored in settings
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