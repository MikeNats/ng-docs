/*global uiServices*/


/**   
* @framework angular  
* @kind jsConcept  
* @type directive
* @name timeLineVisibility
* @memberof module:uiServices
* @Description  Toggles on/off the TimeLine functionality.
* @requires markers+module:mapModule.markers
* @requires timeline+module:mapModule.timeline
* @requires heatMap+module:mapModule.heatMap
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


uiServices.directive('timeLineVisibility', ['timeline', 'markers', 'heatMap', function (timeline, markers, heatMap) {
	
	"use strict";

    /** 
    * @function 
    * @name anonymous 
    * @param {Object} scope
    * @param {Object} el
    * @param {Object} attr
    * @memberof module:uiServices.timeLineVisibility
    * @Description Watching {@link module:mapModule.mapController.$scope.map mapcontrols} 
    */
    
	function link(scope, el, attr) {

        /** 
        * @class
        * @name scope  
        * @memberof module:uiServices.timeLineVisibility.anonymous
        * @classdesc  Directive's local scope: {@link module:mapModule.mapController.$scope.map map}.
        */
     
        /** 
        * @event 
        * @name $watch 
        * @type {listener}
        * @param {Integer} showtimeline
        * @memberof module:uiServices.timeLineVisibility.anonymous.scope
        * @Description As user sets on/off the timeline functionality
        *
        * Directive make's usage of {@link module:mapModule.markers markers}, {@link module:mapModule.heatMap heatMap},  {@link module:mapModule.timeline timeline} API's to: 
        *
        * - Initialize Timeline if the timeline was not active.
        *
        * - Activate Timeline if it was deactivated but initialized.
        *
        * - Deactivate Timeline if it was active.
        *
        */
        
		scope.$watch('mapcontrols.settings.showTimeLine', function (showtimeline) { //Watch markers, toggle view
			
			if (scope.mapcontrols.settings.allow === true) {// True when  User starts to interact with ui.
				
				if (scope.mapcontrols.settings.timeline.dates === undefined) {//if timeline activated by ui the first time
					
					timeline.set(scope.mapcontrols.settings.response); //Initialize
					
                    scope.mapcontrols.settings.timeline = timeline.get();//push timeline to settings.timeline
                    
                    timeline.set(scope.mapcontrols.settings);
                    
                    scope.mapcontrols.settings.timeline = timeline.get();
                    
                    scope.mapcontrols.settings.zeroBasedMinMonth = timeline.zeroBasedMonth(scope.mapcontrols.settings.timeline.dates.minMonth);
                    
                    scope.mapcontrols.settings.zeroBasedMaxMonth = timeline.zeroBasedMonth(scope.mapcontrols.settings.timeline.dates.maxMonth);
                    
                    scope.mapcontrols.settings.curIndecatorDate = {};
                    
                    scope.mapcontrols.settings.curIndecatorDate.month = scope.mapcontrols.settings.zeroBasedMinMonth;
                    
                    scope.mapcontrols.settings.curIndecatorDate.year = scope.mapcontrols.settings.timeline.dates.minYear;
                    
                    timeline.timeMachine(scope.mapcontrols.settings.response, 0, scope.mapcontrols.settings, 'forward');
                    
                    
                    if (scope.mapcontrols.settings.showMarkers) {//Markers on
                        
                        markers.toggleView(scope.mapcontrols.settings);//Markers off

                    }
                    
                    if (scope.mapcontrols.settings.showHeatMap) {//HeatMap on
                        
                        timeline.clearTimeMachine();//clear chashed heatmaps
                        scope.mapcontrols.settings.heatMap = heatMap.get(scope.mapcontrols.settings);//append heatmap with all data
                    }
                    
				}
                
				if (showtimeline) {//TimeLine is on
					
					timeline.timeMachine(scope.mapcontrols.settings.response, scope.mapcontrols.settings.timeline.indicator, scope.mapcontrols.settings);//Initialize timeMachine
					
					/* Variables that are used to display dates in userInterface */
                    scope.mapcontrols.settings.zeroBasedMinMonth = timeline.zeroBasedMonth(scope.mapcontrols.settings.timeline.dates.minMonth);
                    
                    scope.mapcontrols.settings.zeroBasedMaxMonth = timeline.zeroBasedMonth(scope.mapcontrols.settings.timeline.dates.maxMonth);
                     

                } else {//TimeLine is off
					
					if (scope.mapcontrols.settings.showMarkers) {//Markers on
						
						markers.toggleView(scope.mapcontrols.settings);//Markers off

					}
                    
					if (scope.mapcontrols.settings.showHeatMap) {//HeatMap on
						
						timeline.clearTimeMachine();//clear chashed heatmaps
						scope.mapcontrols.settings.heatMap = heatMap.get(scope.mapcontrols.settings);//append heatmap with all data

					}
				}
			}
		});
	}
    
   /**
    * @member
    * @name return 
    * @memberof module:uiServices.timeLineVisibility
    * @public
    * @return {Object} 
    * @Description Wired with  {@link module:mapModule.mapController.$scope.map  mapcontrols} Object: {@link '='}
    *
    * Type: {@link HTML-Attribute} 
    */
	return {
		
		link : link,
		restrict : 'A',
		scope: {
			
			mapcontrols : '='
			
		}
	};
}]);