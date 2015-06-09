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
* @Description Singleton with a closure that implemets user authentication. On success sets user Session.                 
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
    * 
    * @class 
    * @name auth  
    * @public 
    * @classdesc  Implements user authenticantion
    * @memberof module:authModule.authService
    *
    */
    
    var auth = {
        
        /** 
        *
        * @member authenticatited
        * @type {String}  
		* @inner		
        * @memberof module:authModule.authService.auth
		*
		* @summary Default value: auth-not-authenticated.
        * 
        */
        
		authenticatited : 'auth-not-authenticated',
		path : templateUrl + '/js/maps/userDataResponse.js',
	 


        /**
        *
        * @member user
        * @type {method}
		* @inner
        * @memberof module:authModule.authService.auth
        * @param {Object} credentials
        * @return {XMLHttpRequest} 
		* @summary $http request when user submit his credentials on success sets user session. Method is been triggered from public {@link module:authModule.module:authService login(credentials)}
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

            });/*$http.post(auth.path).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {});*/
        },

        
        
        /**
        *
        * @member  setAuthentication 
        * @type {method}
		* @inner
        * @memberof module:authModule.authService.auth
        * @param {String} status
		*
		* @summary Setter for  {@link module:authModule.authService.auth auth.authenticatited}
        */
        
        setAuthentication : function (status) {

            auth.authenticatited = status;

        }
    };
	
	return {

        
        /** 
        *
        * @function
        * @name isAuthenticated
        * @memberof module:authModule.authService
        * @param {Object} credentials  
        * @public
        * @return {xhttprequest} 
        *
		* @summary Triger user authentication promise using {@link module:authModule.authService.auth auth.user(credentials)}.
        */
        
		login : function (credentials) {
			
			return auth.user(credentials);
			
		},
        
        
        
        /**
        *
        * @function
        * @name isAuthenticated
        * @memberof module:authModule.authService
        * @public
		* @param no-arguments
        * @return {Sting} authentication status.
        *
	    * @summary Returns status message of authentication.
        */
        
		isAuthenticated : function () {
			
			return auth.authenticatited;
		}
	};
}]);


 


