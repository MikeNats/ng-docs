/*global uiServices */
/*global templateUrl */
/*global angular*/
/*jshint -W089*/


/**   
* @framework angular  
* @kind jsConcept  
* @type directive
* @name publish
* @memberof module:uiServices
* @Description  Produce a URL with nesesacry variables for embading the custom map into iframe and makes the URL availiable to the USER by trigering and populating a modal window.
* @requires popUp+module:uiServices.popUp
* @requires errorHandler+module:mapModule.errorHandler
* @requires modelBuilder+module:uiServices.modelBuilder
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/






uiServices.directive('publish', ['popUp', 'errorHandler', 'Session', 'modelBuilder', function (popUp, errorHandler, Session, modelBuilder) { // Debendancies injection.
	
	"use strict";

    /**
    * @function 
    * @name anonymous 
    * @param {Object} scope
    * @param {Object} el
    * @param {Object} attr
    * @memberof module:uiServices.publish
    * @Description Watching {@link module:mapModule.mapController.$scope.map map} 
    */
    
	function link(scope, el, attr) {

        /**  
        * @class
        * @name scope  
        * @memberof module:uiServices.publish.anonymous
        * @classdesc  Directive's local scope: {@link module:mapModule.mapController.$scope.map mapcontrols}.
        */
 
		
 
        /** 
        * @memeber 
        * @name publish 
        * @param no-arguments
        * @memberof module:uiServices.publish.anonymous.scope
        * @Description Filter's the attributes of  {@link module:mapModule.mapController.$scope.map mapcontrols.settings} Object to cretae a url with nesesacry variables by for embading the map into iframe.
        *
        *
        * Use of {@link module:mapModule.errorHandler errorHandler.settingsParseJson} API service to validate that the produced json,
        *
        *that was produced by the filtering the   {@link module:mapModule.mapController.$scope.map mapcontrols.settings} is valid, so as to be stringnified to produce the final  URL  
        *
        * Use of {@link module:uiServices.popUp  popUp.populate} API service to make availiable the URL to the  USER throught modal window.
        */
            
        
		scope.project.publish = function () {

			var model = {};
            model.projectId = scope.project.projectId;
            model.projectName = scope.project.projectName;
            model.settings = modelBuilder.data(scope.project.settings);
            console.log(model);
			popUp.populate('<p><strong>Project Saved Succesfully!!!</strong></p><p style="font-size:12px;float:left;"><strong>URL: </strong><br/>' + templateUrl + '/index.html#/visualization/' + angular.toJson(model) + '</p>');
           

       
		};
	}
   
    
   /**
    * @member
    * @name return 
    * @memberof module:uiServices.publish
    * @public
    * @return {Object} 
    * @Description Wired with:
	* {@link module:mapModule.mapController.$scope.map  mapcontrols} Object: {@link '='}
	* {@link module:mapModule.mapController.$scope.urlVariables  urlVariables} Object: {@link '='}
	*
    * Type: {@link HTML-Attribute} 
    */
    
	return {
		
		link : link,
		restrict : 'A',
		scope: true
	};
}]);