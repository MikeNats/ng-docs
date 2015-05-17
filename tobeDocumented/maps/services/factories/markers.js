/**
 * Factory markers : Appends markers on the google map. 
 *
 * @Module mapServices.
 *
 * @see markersToolSet : private object.
 * 
 * @param   markersToolSet.findUniqueSubCategories() : finds the number of the difrent marker categories.
 * @param   markersToolSet.initializeMarkerImage() :  returns default options for the dimentions of the images of the markers.
 * @param   markersToolSet.buildMarker :  for each given set of goordination appends a marker with an event listner that trigers a popup   that contains  given html.
 * 
 * @return get :  returns settinngs with extended with  markers array that contains all the nesesary data for the markers
 * @return toggleView : show hide markers.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */




/*global mapServices */
/*global google*/

mapServices.factory('markers', [function () {
    
    'use strict';
    
	var markersToolSet = {};

	markersToolSet.findUniqueSubCategories = function (recordNo, settings, isUniqueCategory) {
        
        var i;
        for (i = 0; i < settings.subCatergoryName.length; i += 1) {//check if SUBCATEGORY exist in subCatergoryName
            
            if (settings.response[recordNo].SUBCATEGORY === settings.subCatergoryName[i]) {
                
                isUniqueCategory = false;
            }
        }
        
        if (isUniqueCategory) { //if SUBCATEGORY is unique push it in subCatergoryName
            
            settings.subCatergoryName.push(settings.response[recordNo].SUBCATEGORY);
            
        }
	};

	markersToolSet.initializeMarkerImage = function (settings) {
        
        return {
            size : new google.maps.Size(+settings.dim, 32),
            origin : new google.maps.Point(0, 0),
            anchor : new google.maps.Point(0, 32)
            
		};
	};

	markersToolSet.initializeMarkerinfoWindow = function () {
        
        return new google.maps.InfoWindow({
            
            content: "holding..."
            
        });
		   
	};

	markersToolSet.buildMarker = function (recordNo, settings, image, infowindow) {
        
     
        var myLatLng = new google.maps.LatLng(+settings.response[recordNo].LATITUDE, +settings.response[recordNo].LONGITUDE),   //Find coordinates

            marker = new google.maps.Marker({ // create a marker
                position : myLatLng,
                map : settings.map,
                //  icon: GoogleMapsMultipleMarkers.setImg(settings.response[recordNo].SUBCATEGORY,i),
                title : settings.response[recordNo].TOWNORCITY,
                zIndex: 1,
                // custom attribute to trace the category of the marker for show/hide function
                markerCategory : settings.response[recordNo].SUBCATEGORY,
                popUp: '<div id="content" style="width:110px;height:100px;">' + '<p> ' + settings.response[recordNo].TITLE + '</p>' + '<p> ' + settings.response[recordNo].DESCRIPTION + '</p>' + '</div>'
            });
        
        google.maps.event.addListener(marker, 'click', function () {// add event listener to each marker for infowindow
            
            infowindow.setContent(this.popUp);
            infowindow.open(settings.map, this);
            
        });
        //marker is been cached in settings.marker arrey
        
        settings.markers.push(marker);
        
        return marker;
    };

    return {
        
        get : function (settings) {//Places all the markers on the map
            
            var image = markersToolSet.initializeMarkerImage(settings),
                infowindow = markersToolSet.initializeMarkerinfoWindow(),
                recordNo;
            
            for (recordNo in settings.response) {
                
                if (settings.response.hasOwnProperty(recordNo)) {
                    
                    markersToolSet.findUniqueSubCategories(recordNo, settings, true);

					markersToolSet.buildMarker(recordNo, settings, image, infowindow).setMap(settings.map);
				
                }
            }
            
            return settings;
        
        },
        
        toggleView : function (settings) {//Hide  markers on the map
            
            var marker;
            for (marker in settings.markers) {
                
                if (settings.markers.hasOwnProperty(marker)) {
                    
                    settings.markers[marker].setMap(settings.showMarkers ? settings.map : null);
                }
            }
        }
    };
}]);


