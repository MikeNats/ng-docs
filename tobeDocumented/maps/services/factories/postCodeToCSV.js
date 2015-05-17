/**
 * Factory machPostCodeTo :  maches postcodes with LatLot. 
 *
 * @Module mapServices.
 *
 * @Dependancies  errorHandler : factory under mapServices.
 *
 * @see coordination : private object.
 * 
 * @param  coordination.handleErrors() : Checks the csv for wrong data.
 * @param  coordination.toLatLon() : matches postcode with coordinations.
 * 
 * @return get : returns an array of LatLot
 *
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */



/*global mapServices*/
/*jshint -W069 */

mapServices.factory('machPostCodeTo', ['errorHandler', function (errorHandler) {
    
    "use strict";
    
    var coordination = {};
    
    coordination.handleErrors = function (apiResponse, recordNo) {// validates coordinations.
        
        return errorHandler.csv({
            LONGITUDE : apiResponse.LONGITUDE,
            LATITUDE : apiResponse.LATITUDE,
            SUBCATEGORY : apiResponse.SUBCATEGORY,
            POSTCODE : apiResponse.POSTCODE
            
        }, recordNo);
    
    };
    
    coordination.toLatLon = function (apiResponse, response) {//matches postcode with coordinations. 
        
        var recordNo,
            i,
            validCoord;
        
		for (recordNo in  response) {
            
            if (response.hasOwnProperty(recordNo)) {
                
				for (i = 0; i < apiResponse.length; i += 1) {
                    
                    if (response[recordNo].POSTCODE === apiResponse[i].POSTCODE) {
                        
                        //mach and validates coordinates.
                        validCoord = coordination.handleErrors(apiResponse[i], recordNo);//obj argument.
                        
                        //stores validated coords
						response[recordNo].LONGITUDE = validCoord.LONGITUDE;
						response[recordNo].LATITUDE = validCoord.LATITUDE;
						
					}
				
				}
            
            }
        
        }
        
        return response;
    
    };
    
    return {
        
        get : function (apiResponse, response) {
            
            return coordination.toLatLon(apiResponse, response);
        
        }
    };
}]);
