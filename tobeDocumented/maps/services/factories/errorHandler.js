/**
 * Factory errorHandler : an exeption singlenton that checks cvs and settings for errors and populates a pop up with the relevant errors. 
 *
 * @Module mapServices.
 *
 * @Dependancies  popUp : factory under uiServices.
 *
 * @see handler : private object.
 * 
 * @param  handler.csvData() : Checks the csv for wrong data.
 * @param  handler.addErrorClass() : If error is detected the function is called and add a class to the popup that changes the styles of it.
 * @param  handler.removeErrorClass() :opposite of  handler.addErrorClass().
 * 
 * @return csv : checks csv data.
 * @return settingsParseJson : checks the convertion of settings to json.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */


/*global mapServices*/
/*global angular*/

mapServices.factory('errorHandler', ['popUp', function (popUp) {
    
    "use strict";
    
    var handler = {};
    
    handler.csvData = function (input, recordNo) {
        
        //chek's if  POSTCODE  is an empty string, ignores white spaces
        
        if (input.POSTCODE === '') {
            
            throw {
                
                name: 'CSV-Error[ POSTCODE ]',
                message: 'PostCode in row  ( ' + (+recordNo + 1) + ' )  is invalid. Please correct the csv  and re-upload it. '
            
            };
        
        }
        
        //chek's if  LONGITUDE/LATITUDE  have correct values
        
        if (input.LONGITUDE === undefined ||  input.LATITUDE === undefined || input.LONGITUDE === '' ||  input.LATITUDE === '') {
            
            throw {
                
                name: 'CSV-Error[ POSTCODE ]',
                message: 'PostCode in row  ( ' + (+recordNo + 1) + ' )  produced invalid coordinates. Please correct the csv  and re-upload it. '
            
            };
        
        }
        
        //chek's if  SUBCATEGORY is correct
        if (input.SUBCATEGORY === undefined || input.SUBCATEGORY === '') {
            
            throw {
                
                name: 'CSV-Error[ SUBCATEGORY  ]',
                message: 'sub-catergory in row  ( ' + (+recordNo + 1) + ' )  is invalid. Please correct the csv  and re-upload it. '
            };
        
        }
    
    };

	handler.addErrorClass = function () {
        
        angular.element(document.getElementById('alertPopUp')).children('article').addClass('error');

	};

	handler.removeErrorClass = function () {
        
        angular.element(document.getElementById('alertPopUp')).children('article').removeClass('error');

	};
    
    return {
        
        csv : function (input, recordNo) {
            
            try {
                
                handler.csvData(input, recordNo);
				handler.removeErrorClass();
            
            } catch (e) {
                
                popUp.populate(e.name + ': ' + e.message);
                handler.addErrorClass();
            
            }
            
            return input;
        
        },
        
        settingsParseJson : function (input) {
            var response;
            
            try {
                
                response = JSON.stringify(input);
                handler.removeErrorClass();
            
            } catch (e) {
                
                popUp.populate('<p>An error occured in publish function </p>');
                handler.addErrorClass();
            
            }
            
            return response;
		}
				
    };
}]);
