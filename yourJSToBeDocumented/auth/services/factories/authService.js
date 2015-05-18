/*global angular*/
/*global templateUrl*/
/*global auth*/

/**    
*                 
* <b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#factory-recipe' target='_blank'> angular.factory </a>
*
* <b>Parent Module:</b> {@link module:authModule authModule}
*
* <b>Description:</b>  Singleton with a closure that implemets user authentication. On success sets user Session.  
*
*
*
* @module authService         
* @memberof module:authModule  
* @requires $http+https://docs.angularjs.org/api/ng/service/$http+external                                     
* @requires AUTH_EVENTS+../documentation/index.html#!/module:authModule.module:AUTH_EVENTS+internal    
* @requires Session+../documentation/index.html#!/module:authModule.module:Session+internal 
* @type Factory
*
*/

   



auth.factory('authService', ['$http', 'AUTH_EVENTS', 'Session', function ($http, AUTH_EVENTS, Session) {
	
    'use strict';

    /**
    *
    * @class 
    * @name auth 
    * @public
    * @classdesc
    *
    * <b>Type:</b>  Private Object of {@link module:authModule.module:authService factory.authService } <br/> <br/>
    * <b>Description: </b> Implements user authenticantion.
    *
    */
    
	var auth = {
        
        /** 
        *
        * Default value: auth-not-authenticated.
        *
        * @member authenticatited
        * @type {private | String}  
		* @inner		
        * @memberof module:authModule.module:authService~auth
        *
        */
        
		authenticatited : 'auth-not-authenticated',
		path : templateUrl + '/js/maps/userDataResponse.js',
	 


        /**
        *
        * $http request when user submit his credentials on success sets user session. Method is been triggered from public {@link module:authModule.module:authService login(credentials)}
        *
        * @member user
        * @type {private | method}
		* @inner
        * @memberof module:authModule.module:authService~auth
        * @param {Object} credentials
        * @return {XMLHttpRequest} 
        *
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
        * Setter for  {@link module:authModule.module:authService~auth auth.authenticatited}
        *
        * @member  setAuthentication 
        * @type {private | method}
		* @inner
        * @memberof module:authModule.module:authService~auth
        * @param {String} status  
        *
        */
        
        setAuthentication : function (status) {

            auth.authenticatited = status;

        }
    };
	
	return {

        
        /** 
        *
        * Triger user authentication promise using {@link module:authModule.module:authService~auth auth.user(credentials)}.
        *
        * @param {Object} credentials  
        * @public
        * @return {xhttprequest} 
        *
        */
        
		login : function (credentials) {
			
			return auth.user(credentials);
			
		},
        
        
        
        /**
        *
        * Returns status message of authentication.
        *
        * @public
		* @param no-arguments
        * @return {Sting} authentication status.
        *
        */
        
		isAuthenticated : function () {
			
			return auth.authenticatited;
		}
	};
}]);


 


