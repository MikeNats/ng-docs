/*global angular*/
/*global settings*/
angular.module('settingsProviderModule', []).factory('mapSettngsService', function () {
   
	"use strict";
	
    var localSettings = {};
          		
	localSettings.data = Object.create(settings);

	localSettings.setSettings = function (data) {
		localSettings.data  = data;
	};
	
	localSettings.getSettings = function () {
		return localSettings.data;
	};
	
	localSettings.resetSettings = function () {
		
		localSettings.data = Object.create(localSettings);
	};
	
	return localSettings;

});

