/**
 * Factory kmlLayer : appends kml layer using FusionTables. 
 *
 * @Module mapServices.
 *
 * @see mapLayer : private object.
 * 
 * @param   mapLayer.options() : returns nessesary options fro the creation of a kml layer.
 * 
 * @return get : returns a new intsance of a kml layer.
 * @return set : sets the options for the  kml layer.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global mapServices*/
/*global google */


mapServices.factory('kmlLayer', [function () {
    
    "use strict";
    
    var mapLayer = {};
    
    mapLayer.options = function (settings) {
        
        return {
            
            map : settings.map,
		    styleId : 2,
		    templateId : 2,
            query : {
	            select : "geometry",
	            from : settings.selectedLayer
			}
        };
    };
    
    return {
        
        get : function (settings) {
            
            return new google.maps.FusionTablesLayer(mapLayer.options(settings));
            
        },
        
        set : function (settings) {

            settings.layerObject.setOptions(mapLayer.options(settings));
        }
    };
}]);
