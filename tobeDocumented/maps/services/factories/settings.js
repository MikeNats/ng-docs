/*;
"use strict";
mapServices.factory('mapSettings',[function(){  
     
       var  settings = {
          
                    response: null,//
                    mapLang:'54.3981628',
                    mapLong:'-4.116037',
                    zoom:'60',
                    dim:20,
                    map: null, 
                    heatMapRadius:20,
                    heatMapOpacity:100,
                    heatmap:null,
                    markers: [],
                    layerObject:'//',
                    layers: {
                        'none':'none',
                        'Barnardos Regions':'1REVhQjHZ6vkw-CiOnfclWQwFtj9y3TEVEv2PHCDu',
                        'UK Regions':'17f3W6ZhwrcqMZDjr5iStdqIfJqEKKM_mVfgM33Oe'
                    },
                    selectedLayer : 'none', 
                    subCatergoryName:[],

                    showMarkers:false,
                    showHeatMap:false, 
                    showTimeLine:false,
                    userCsvPath: './csv/',
                    userImgPath:'./img/',
                    path:'./csv/maps/service-export-win7.csv',

      };
 
   return {

        get : function(){
            return settings;
        },

        set : function(response){
           settings.response = response;
        }


  
    }
}]); */