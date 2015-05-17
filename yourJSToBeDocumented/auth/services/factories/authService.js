/*global angular */
/*global templateUrl */
/*global auth */

/**    
                 
 * <b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#factory-recipe' target='_blank'> angular.factory </a> <br /><br/> 
 * <b>Parent Module:</b> {@link module:authModule authModule} <br /> <br /> 
 * <b>Description:</b>  Singleton with a closure that implemets user authentication. On success sets user Session.  <br /><br/>            
 * @module authService         
 * @memberof module:authModule  
 * @requires $http+https://docs.angularjs.org/api/ng/service/$http+external                                     
 * @requires AUTH_EVENTS+../documentation/index.html#!/module:authModule.module:AUTH_EVENTS+internal    
 * @requires Session+../documentation/index.html#!/module:authModule.module:Session+internal  
 * @type Factory
 */

   



auth.factory('authService', ['$http', 'AUTH_EVENTS', 'Session', function ($http, AUTH_EVENTS, Session) {
	
	'use strict';
	
     /**
     * @class auth 
     * @public
     * @classdesc
     * <b>Type:</b>  Private Object of {@link module:authModule.module:authService factory.authService } <br/> <br/>
	 * <b>Description: </b> Implements user authenticantion.
     */
    
	var auth = {
		/** 
        * Default value: auth-not-authenticated
        * @property {private | String}  authenticatited
        * @memberof module:authModule.module:authService~auth
        */
		authenticatited : 'auth-not-authenticated',
		path : templateUrl + '/js/maps/userDataResponse.js',
	 


        /**
        * $http request when user submit his credentials on success sets user session.
        * @function user
        * @memberof module:authModule.module:authService~auth
        * @param {Object} credentials
        * @return {XMLHttpRequest} 
        */
        user : function (credentials) {

            return $http.get(auth.path).success(function (data, status, headers, config) {

                Session.create(data.user.userName, data.user.password, data.user.token, data.user.projects);
                auth.setAuthentication(AUTH_EVENTS.loginSuccess);

            }).error(function (data, status, headers, config) {

                auth.setAuthentication(AUTH_EVENTS.loginFailed);

            });/*$http.post(auth.path).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {});*/
        },

        /**
        * Setter for   {@link authenticatited}
        * @function  setAuthentication 
        * @memberof module:authModule.module:authService~auth
        * @param {String} status          
        */
        setAuthentication : function (status) {

            auth.authenticatited = status;

        }
    };
	
	return {

        /** 
         * @param {Object} credentials  
         * @public
		 * @return {xhttprequest} .
         */
		login : function (credentials) {
			
			return auth.user(credentials);
			
		},
        
       /**
         * @public
		 * @return {Sting} authentication status.
         */
		isAuthenticated : function () {
			
			return auth.authenticatited;
		}
	};
}]);


 


