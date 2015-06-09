/*global auth */

/**   
*
* @framework angular
* @kind jsConcept
* @type constant
* @name AUTH_EVENTS
* @memberof module:authModule
* @Description Contains authentication status messages.                 
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9
*/

auth.constant('AUTH_EVENTS', {
    
    /** 
    * 
    * @member loginSuccess
    * @memberof module:authModule.AUTH_EVENTS
    * @public
    * @static
    * @type {String}
    *
    */
    
	loginSuccess : 'auth-login-success',
    
    /** 
    * 
    * @member   loginSuccess 
    * @memberof module:authModule.AUTH_EVENTS
    * @public
    * @static
    * @type {String}
    *    
    */
    
	loginFailed : 'auth-login-failed',
    
    /**
    *   
    * @member  logoutSuccess 
    * @memberof module:authModule.AUTH_EVENTS
    * @public
    * @static
    * @type {String}     
    *           
    */
    
	logoutSuccess : 'auth-logout-success',
    
    /**     
    *     
    * @member   sessionTimeout 
    * @memberof module:authModule.AUTH_EVENTS
    * @static       
    * @public 
    * @type {String}
    *     
    */
    
	sessionTimeout : 'auth-session-timeout',
    
    /**
    * 
    * @member   notAuthenticated 
    * @memberof module:authModule.AUTH_EVENTS   
    * @public
    * @static
    * @type {String}
    *
    */
    
	notAuthenticated : 'auth-not-authenticated',
    
    /**
    *
    * @member   notAuthorized
    * @memberof module:authModule.AUTH_EVENTS  
    * @public
    * @static
    * @type {String} 
    *
    */
    
	notAuthorized : 'auth-not-authorized'
    
});
  