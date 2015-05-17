/*;
"use strict";

//pieChartDirectiveModule create the directive of  pieChart tag, trigers the chart 
mapController.directive('googleMaps',['$rootScope','$stateParams','$interval','markers','heatMap','kmlLayer','timeline','uiAnimation','popUp','errorHandler','gMap', function($rootScope,$stateParams,$interval,markers,heatMap,kmlLayer,timeline,uiAnimation,popUp,errorHandler,gMap){ 
    function link(scope, el, attr){  

        scope.$watch('mapcontrols.settings.zoom', function(zoom){ //Watch map Zoom    
             if(scope.mapcontrols.readyToUse ){

                scope.mapcontrols.settings.map.setOptions(zoom,settings);

              };
          });      


        scope.$watch('mapcontrols.settings.heatMapRadius', function(heatMapRadius){ //Watch map heat map  radius    

             if(scope.mapcontrols.readyToUse ){
				 
				 heatMap.setRadius(scope.mapcontrols.settings);
          
              
                      if(scope.mapcontrols.settings.showTimeLine){
                           timeline.clearTimeMachine();
                           heatMap.disConstruct(scope.mapcontrols.settings);
                           scope.mapcontrols.settings.timeline.indicator = 0; 
                           timeline.timeMachine(scope.mapcontrols.settings.response,0,scope.mapcontrols.settings);
                          
                      };

              };
          });  

        scope.$watch('mapcontrols.settings.heatMapOpacity', function(heatMapOpacity){ //Watch map heat map opacity    
                 if(scope.mapcontrols.readyToUse ){
         
                       heatMap.setOpacity(scope.mapcontrols.settings);
          
              
                      if(scope.mapcontrols.settings.showTimeLine){
                           timeline.clearTimeMachine();
                           heatMap.disConstruct(scope.mapcontrols.settings);
                           scope.mapcontrols.settings.timeline.indicator = 0;
                      
                           timeline.timeMachine(scope.mapcontrols.settings.response,0,scope.mapcontrols.settings);
                          
                      };

                  };

          });  

        scope.$watch('mapcontrols.settings.showHeatMap', function(showHeatMap){ //Watch map heat, toogle view    
             if(scope.mapcontrols.readyToUse ){

                  if(scope.mapcontrols.settings.showTimeLine){

                      if(showHeatMap){  
                         timeline.clearTimeMachine();
                          scope.mapcontrols.settings.timeline.indicator = 0;
                          timeline.timeMachine(scope.mapcontrols.settings.response,0,scope.mapcontrols.settings);
            

                      }else{

                            heatMap.toggleView(scope.mapcontrols.settings);
                            timeline.clearTimeMachine();
                            scope.mapcontrols.settings.timeline.indicator = 0;
                            timeline.timeMachine(scope.mapcontrols.settings.response,0,scope.mapcontrols.settings);

                       
                      }; 
                        
                 }else {
                   if(scope.mapcontrols.settings.showTimeLine){
                    scope.mapcontrols.settings.timeline.indicator = 0;
                   
                        timeline.clearTimeMachine();
                    }
                    heatMap.toggleView(scope.mapcontrols.settings);
                 };
              };
          });  

        scope.$watch('mapcontrols.settings.selectedLayer', function(layer){ //Watch map heat map opacity    
             if(scope.mapcontrols.readyToUse){

                 kmlLayer.set(scope.mapcontrols.settings);
              };
          });       


          scope.$watch('mapcontrols.settings.showMarkers', function(showMarkers){ //Watch markers, toogle view    
             if(scope.mapcontrols.readyToUse  ){
          
                  
                  if(scope.mapcontrols.settings.showTimeLine){
                       if(!showMarkers){
                            timeline.clearTimeMachine();
                            markers.toggleView(scope.mapcontrols.settings);

                       }
                       scope.mapcontrols.settings.timeline.indicator = 0;
                       timeline.timeMachine(scope.mapcontrols.settings.response,scope.mapcontrols.settings.timeline.indicator,scope.mapcontrols.settings,scope.mapcontrols.settings.timeline.indicator);
                 }else{

                       markers.toggleView(scope.mapcontrols.settings);
                
                 };
              };
          }); 

          scope.$watch('mapcontrols.settings.timeline.indicator', function(indicator){ //Watch markers, toogle view    
              if(scope.mapcontrols.readyToUse){

                  scope.mapcontrols.currentIndecatorDate();

                  if(scope.mapcontrols.settings.showTimeLine){

                     
                        if(scope.mapcontrols.settings.showTimeLine && (indicator - scope.mapcontrols.settings.timeline.cashedIndicator >= 0 ) ){
                          
                              var direction =  'forward';

                        }else{

                              var direction =  'backward';

                        };

                        timeline.timeMachine(scope.mapcontrols.settings.response,indicator,scope.mapcontrols.settings,direction);

                        scope.mapcontrols.settings.timeline.cashedIndicator  =  indicator;
                  };
              }

          }); 

          scope.$watch('mapcontrols.settings.showTimeLine', function(showtimeline){ //Watch markers, toogle view    
             
              if(scope.mapcontrols.readyToUse  ){

                   if(scope.mapcontrols.settings.timeline===undefined){

                     timeline.set(scope.mapcontrols.settings.response); 

                     scope.mapcontrols.settings.timeline = timeline.get();

                  }

                  if(showtimeline){

                      timeline.timeMachine(scope.mapcontrols.settings.response,scope.mapcontrols.settings.timeline.indicator,scope.mapcontrols.settings);
                    
                  }else{
                     
                      if(scope.mapcontrols.settings.showMarkers){
                        
                         markers.toggleView(scope.mapcontrols.settings);

                      };

                      if(scope.mapcontrols.settings.showHeatMap){

                          timeline.clearTimeMachine();
                          scope.mapcontrols.settings.heatMap = heatMap.get(scope.mapcontrols.settings);

                      };

                  };

                  scope.mapcontrols.zeroBasedMinMonth = timeline.zeroBasedMonth(scope.mapcontrols.settings.timeline.dates.minMonth);
                  scope.mapcontrols.zeroBasedMaxMonth = timeline.zeroBasedMonth(scope.mapcontrols.settings.timeline.dates.maxMonth);

             };

          }); 


          //setmapPotition
          scope.mapcontrols.setMapPosition = function(event){ 

             var step = .3;

              if( angular.element(event.currentTarget).hasClass('topAr') ){
                    scope.mapcontrols.settings.mapLang = +scope.mapcontrols.settings.mapLang + step; 
              }else if( angular.element(event.currentTarget).hasClass('bottomAr') ){
                    scope.mapcontrols.settings.mapLang = +scope.mapcontrols.settings.mapLang - step;
              }else if( angular.element(event.currentTarget).hasClass('lefAr') ){
                    scope.mapcontrols.settings.mapLong = +scope.mapcontrols.settings.mapLong - step;
              }else{
                   scope.mapcontrols.settings.mapLong = +scope.mapcontrols.settings.mapLong + step;
              } 
              scope.mapcontrols.settings.map.setCenter(new google.maps.LatLng(+scope.mapcontrols.settings.mapLang,+scope.mapcontrols.settings.mapLong));
     
          };


        scope.mapcontrols.resetPosition = function(){

             scope.mapcontrols.settings.map.setOptions(gMap.reset()); 
        
         }


      scope.mapcontrols.publish = function(){ 

            var seetingsToString = {};
            //add some updates from map attributes;
            var temSettings = scope.mapcontrols.settings;

            for(var attribute in temSettings){

                if(attribute!='response' && attribute!='map' && attribute!='heatMap' && attribute!='heatmap' && attribute!='markers' && attribute!='layers' && attribute!='  
animate' && attribute!='errorHandler' && attribute!='findMinMaxDates'  && attribute!='monthAsNumber'   && attribute!='resetHeatMapMemory'   && attribute!=' 
resetHeatMapMemory' && attribute!='setMinMaxDates'  && attribute!='setMinMaxDetailedDates'   && attribute!='visibleCoords'  && attribute!='layerObject'   && attribute!='cashedHeatMapsBackrward'){
                      seetingsToString[attribute] = scope.mapcontrols.settings[attribute];
                };

            };
        
 
           popUp.populate('<p style="font-size:12px;float:left;">'+ templateUrl+'/index.html#/map/'+errorHandler.settingsParseJson(seetingsToString)+'</p>');
  
            
     };

        scope.mapcontrols.currentIndecatorDate = function(){

          scope.mapcontrols.curIndecatorDate = timeline.currentIndecatorDate(scope.mapcontrols.settings);


        }


       scope.mapcontrols.trigertimeMachineFromUi = function($event){
                timeline.moveInTimeByIncrementTimeIndicatorFromCurrentTimeStampToEnd(scope.mapcontrols,$event);

      };





 $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

  if(toState.name !='customap'){

    delete scope.mapcontrols.readyToUse ;

  }

 });

    } 
    return {
        link: link,
        restrict: 'E',
        scope: {  
          mapcontrols:'=',
          uiaccordeon:'='

      
         

         
         }
     };
}]) */