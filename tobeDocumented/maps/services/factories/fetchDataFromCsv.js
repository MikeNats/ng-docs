/**
 * Factory fetchDataFromCsvFactory : returns XMLHttpRequest converting csv to json. 
 *
 * @Module mapServices.
 *
 * @Dependancies  popUp : factory under uiServices.
 * @Dependancies  popUp : $http.
 *
 * @see parse : private object.
 * 
 * @param  parse.CsvToJson() : convert csv to json.
 * 
 * @return csv : on success return XMLHttpRequest esle populates popup with an felure message.
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */



/*global mapServices*/

mapServices.factory('fetchDataFromCsvFactory', ['$http', 'popUp', function ($http, popUp) {
    
    "use strict";
    
    var parse = {};
    
    parse.CsvToJson = function (response) {
        
        var fetchedString = JSON.stringify(response.data),
            catergoriesNames,
            arrayOffetchedString,
            arrayOfColumns = [],
            incomingData = {},
            incomingDataArray = [],
            i,
            column,
            row;
        
        fetchedString = fetchedString.replace(/\\r/g, 'NEWROW').replace(/\\n/g, '');
        
        fetchedString = fetchedString.replace('"', '').replace('"', '');
        
        arrayOffetchedString = fetchedString.split('NEWROW');
        
        catergoriesNames = fetchedString.substr(0, fetchedString.indexOf('NEWROW')).split(',');//names of the categories
         
        for (i = 0; i < arrayOffetchedString.length; i += 1) {
            
            arrayOfColumns[i] = arrayOffetchedString[i].split(',');
        
        }
        
        for (column = 1; column < arrayOfColumns.length; column += 1) {
            
            for (row = 0; row < catergoriesNames.length; row += 1) {
                
                incomingData[catergoriesNames[row]] = arrayOfColumns[column][row];
            
            }
            
            incomingDataArray.push(incomingData);
            incomingData = {};
        
        }
        
        return incomingDataArray;
    
    };

    return {
        
        get : function (path) {
            
            return $http.get(path).then(function (response) {
                
                return parse.CsvToJson(response);
            
            }, function (error) {
                
                popUp.populate('Unable to stablish connection with server -  ' + error);
            
            });
        
        }
    };
}]);
