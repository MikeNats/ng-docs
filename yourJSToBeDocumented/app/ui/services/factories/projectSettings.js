/*global uiServices*/

/** 
* @framework angular  
* @kind jsConcept  
* @type factory
* @name projectSettings
* @memberof module:uiServices
* @Description Provide's Object for new project.
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


uiServices.factory('projectSettings', function () {
   
	"use strict";

    /** 
    * @class   
    * @name project
    * @memberof module:uiServices.projectSettings
    * @classdesc Encapsulates all the nessdesary attributes to initialize a google maps project.
    */
    
    var project = {
 
        /** 
        * @property   
        * @name projectId
        * @type {String}
        * @memberof module:uiServices.projectSettings.project
        * @Description Unique identifier of the specific project.
        */
        
        "projectId" : null,
        
        /** 
        * @property   
        * @name projectName
        * @type {String}
        * @memberof module:uiServices.projectSettings.project
        * @Description Project name.
        */
        "projectName" : null,

        /** 
        * @class   
        * @name settings
        * @memberof module:uiServices.projectSettings.project
        * @Description Encapulates all the attributes that are nessesary to triger a new google map
        * As the user is further customizing the view of the map. The {@settings} is been extented with new attributes: timeline etc..
        */
        
        "settings" :  {
            
            /** 
            * @property 
            * @name response
            * @type {Array}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description  Data fethed from CSV. 
            */
            "response" : null,
            
            /** 
            * @property 
            * @name mapLang
            * @type {Float}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description  Map Latitude.
            */
            "mapLang" : 54.3981628,
            
            /** 
            * @property 
            * @name mapLong
            * @type {Float}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description  Map Longitude. 
            */
            "mapLong" : -4.116037,
            
            /** 
            * @property 
            * @name zoom
            * @type {Float}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description  Map zoom. 
            */
            "zoom" : 60,
            
            /** 
            * @property 
            * @name zoom
            * @type {Float}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description  Marker image width. 
            */
            "dim" : 20,
            
            /** 
            * @property 
            * @name allow
            * @type {Bolean}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description For performace reason's set true after map has been initialized. 
            */
            "allow" : false,
            
            /** 
            * @property 
            * @name map
            * @type {Object}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description google map Object 
            */
            "map" : null,
            
            /** 
            * @property 
            * @name heatMapRadius
            * @type {Integer}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Heat Map Radius 
            */
            "heatMapRadius" : 20,
            
            /** 
            * @property 
            * @name heatMapOpacity
            * @type {Integer}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Heat Map Opacity 
            */
            "heatMapOpacity" : 100,
            
            /** 
            * @property 
            * @name heatmap
            * @type {Object}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Heat Map layers 
            */
            "heatmap" : null,
            
            /** 
            * @property 
            * @name markers
            * @type {Object}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Markers 
            */
            "markers" : [],
            
            /** 
            * @property 
            * @name layerObject
            * @type {String}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Selected KML layer.
            */
            "layerObject" : null,
            
            /** 
            * @property 
            * @name layers
            * @type {Object}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Availiable KML layer's.
            */
            "layers": {
                "none" : "none",
                "Barnardos Regions" : "1REVhQjHZ6vkw-CiOnfclWQwFtj9y3TEVEv2PHCDu",
                "UK Regions" : "17f3W6ZhwrcqMZDjr5iStdqIfJqEKKM_mVfgM33Oe"
            },
            
            /** 
            * @property 
            * @name timeline
            * @type {Object}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Availiable KML layer's.
            */
            "timeline" : {
                "indicator" : 0,
                "clicked" : false
            },
            
            /** 
            * @property 
            * @name selectedLayer
            * @type {String}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Selected KML layer.
            */
            "selectedLayer" : "none",
            
            /** 
            * @property 
            * @name subCatergoryName
            * @type {Array}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Subcatecory names of Markers.
            */
            "subCatergoryName" : [],
            
            /** 
            * @property 
            * @name showMarkers
            * @type {Bolean}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Show/Hide Markers
            */
            "showMarkers" : false,
            
            /** 
            * @property 
            * @name showHeatMap
            * @type {Bolean}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Show/Hide HeatMap
            */
            "showHeatMap" : false,
            
            /** 
            * @property 
            * @name showTimeLine
            * @type {Bolean}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Show/Hide TimeLine
            */
            "showTimeLine" : false,
            
            /** 
            * @property 
            * @name userImgPath
            * @type {Array}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Path's for the Marker Images
            */
            "userImgPath" : "./img/",
            
            /** 
            * @path 
            * @name path
            * @type {String}           
            * @memberof module:uiServices.projectSettings.project.settings
            * @Description Path's for the CSV
            */
            "path" : "./js/app/data/maps/service-export-win7.csv"
        }
    
    };
    
    return {
        
        /** 
        * @function 
        * @name get
        * @memberof  module:uiServices.projectSettings.project
        * @param no-arguments
        * @public
        * @static
		* @Description Retures a new instance of project.
        */
        
        get : function () {
        
            return Object.create(project);
            
        }
          
    };
    

});

