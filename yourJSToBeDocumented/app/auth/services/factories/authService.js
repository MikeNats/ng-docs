/*global angular*/
/*global templateUrl*/
/*global auth*/

/**   
*
* @framework angular  
* @kind jsConcept  
* @type factory  
* @name authService
* @memberof module:authModule 
* 
* @Description Singleton with a closure that implemets user authentication.
*
* @requires $http
* @requires AUTH_EVENTS+module:authModule.AUTH_EVENTS
* @requires Session+module:authModule.Session
*
* @author Michail Tsougkranis
* @version 1.0  
* @since Angular.1.3.9     
*/


auth.factory('authService', ['$http', 'AUTH_EVENTS', 'Session', function ($http, AUTH_EVENTS, Session) {
	
    'use strict';

    /**        
    * @class   
    * @name auth  
    * @memberof module:authModule.authService       
    * @classdesc  Encapulates user authenticantion functionality
    */
    
    var auth = {
        
        /** 
        * @member authenticatited
        * @type {String}       
        * @memberof module:authModule.authService.auth
		* @Description Default value: auth-not-authenticated.
        */
        
		authenticatited : 'auth-not-authenticated',
		path : templateUrl + '/js/app/data/userDataResponse.js',
	 


        /**
        * @member user
        * @memberof module:authModule.authService.auth
        * @param {Object} credentials
        * @return {XMLHttpRequest}
		* @Description $http request to check user credentials on success sets user session with the recived user data.
        * Mothd is been invocted from {@link module:authModule.authService login(credentials)}
        */
        
        user : function (credentials) {

            return $http.get(auth.path).success(function (data, status, headers, config) {

                //sets user session   
                Session.create(data.user.userName, data.user.password, data.user.token, data.user.projects);
                
                //Sets authentication status  
                auth.setAuthentication(AUTH_EVENTS.loginSuccess);

            }).error(function (data, status, headers, config) {

                //Sets authentication status 
                auth.setAuthentication(AUTH_EVENTS.loginFailed);
                //Adds Input tags with error class
                angular.element(document.getElementsByTagName('input')).addClass('error');
            });/*$http.post(auth.path).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {});*/
        },

        
        
        /**
        * @member  setAuthentication 
        * @memberof module:authModule.authService.auth
        * @param {String} status
		* @Description Setter for  {@link module:authModule.authService.auth authenticatited}
        */
        
        setAuthentication : function (status) {

            auth.authenticatited = status;

        }
    };
	
	return {

        
        /** 
        * @function 
        * @name login
        * @memberof module:authModule.authService
        * @param {Object} credentials  
        * @public
        * @static
        * @return {xhttprequest} 
		* @description Triger user authentication promise using {@link module:authModule.authService.auth auth.user(credentials)}.
        */
        
		login : function (credentials) {
			
			return auth.user(credentials);
			
		},
        
        
        
        /**
        * @function
        * @name isAuthenticated
        * @memberof module:authModule.authService
        * @public
        * @static
		* @param no-arguments
        * @return {Sting} authentication status.
	    * @description Returns status of authentication.
        */
        
		isAuthenticated : function () {
			
			return auth.authenticatited;
		}
	};
}]);


 


