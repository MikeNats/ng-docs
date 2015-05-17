/**
 * Factory heatMap : handles heatmap. 
 *
 * @Module mapServices.
 *
 * @Dependancies  popUp : factory under uiServices.
 *
 * @see heatMap : private object.
 * 
 * @param  heatMap.construct() : constructs a new heatMap Layer.
 * @param  heatMap.getCoord() : returns a array of google.maps.LatLng based on the given csv response.
 * 
 * @return construct : return a new heatmap layer.
 * @return disConstruct : disconstruct the given heatmap layer.
 * @return get : returns the array of google.maps.LatLng.
 * @return setRadius : set the radius of the heatmap layer.
 * @return toggleView : show/hide heatmap layer.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */


/*global mapServices*/
/*global google*/

mapServices.factory('heatMap', ['popUp', function (popUp) {
    
    "use strict";
    
    var heatMap = {};
    
    heatMap.construct = function (settings, coordinates) {
        
        var  heatmap = new google.maps.visualization.HeatmapLayer({
            
            data: new google.maps.MVCArray(coordinates)
        
        });
        
        heatmap.setMap(settings.map);
        heatmap.set('radius', heatmap.get('radius') ? null : Math.floor(+settings.heatMapRadius));
        heatmap.set('opacity', +settings.heatMapOpacity / 100);
        
        return heatmap;
	};
    
    heatMap.getCoord = function (settings) {
        
        var coordinates = [],
            recordNo;
        
        for (recordNo in  settings.response) {
            
            if (settings.response.hasOwnProperty(recordNo)) {
                
                coordinates.push(new google.maps.LatLng(+settings.response[recordNo].LATITUDE, +settings.response[recordNo].LONGITUDE));
            }
        }
        
        return coordinates;
    
    };
    
    
    return {
        
        construct : function (settings, coord) {
            
            try {
                
                return heatMap.construct(settings, coord);
            
            } catch (e) {

					   // console.log('Exeption in heatMap return construct ');
            }
        
        },
        
        disConstruct : function (settings) {
            
            try {
                
                settings.heatMap.setMap(null);
            
            } catch (e) {
                
                popUp.populate('ERROR: ');
                
            }
        
        },
        
        get : function (settings) {
            
            return heatMap.construct(settings, heatMap.getCoord(settings));
        
        },
        
        setRadius : function (settings) {
            
            settings.heatMap.set('radius', Math.floor(+settings.heatMapRadius));
        
        },
        
        setOpacity : function (settings) {
            
            settings.heatMap.set('opacity', +settings.heatMapOpacity / 100);
        
        },
        
        toggleView: function (settings) {
            
            settings.heatMap.setMap(settings.heatMap.getMap() ? null : settings.map);
        
        }
    };
}]);