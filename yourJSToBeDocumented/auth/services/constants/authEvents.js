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
    * @const 
    * @name loginSuccess
    * @memberof module:authModule.AUTH_EVENTS
    * @public
    * @static
    * @type {String}
    * @default auth-login-success
    *
    */
    
	loginSuccess : 'auth-login-success',
    
    /** 
    * 
    * @const 
    * @name  loginFailed 
    * @memberof module:authModule.AUTH_EVENTS
    * @public
    * @static
    * @type {String}
    * @default auth-login-failed
    *    
    */
    
	loginFailed : 'auth-login-failed',
    
    /**
    *  
    * @const 
    * @name  logoutSuccess 
    * @memberof module:authModule.AUTH_EVENTS
    * @public
    * @static
    * @type {String}     
    * @default auth-logout-success
    *          
    */
    
	logoutSuccess : 'auth-logout-success',
    
    /**     
    *  
    * @const     
    * @name  sessionTimeout 
    * @memberof module:authModule.AUTH_EVENTS
    * @static       
    * @public 
    * @type {String}
    * @default auth-session-timeout
    *     
    */
    
	sessionTimeout : 'auth-session-timeout',
    
    /**
    * 
    * @const 
    * @name   notAuthenticated 
    * @memberof module:authModule.AUTH_EVENTS   
    * @public
    * @static
    * @type {String}
    * @default auth-not-authenticated
    * 
    */
    
	notAuthenticated : 'auth-not-authenticated',
    
    /**
    *
    * @const 
    * @name   notAuthorized
    * @memberof module:authModule.AUTH_EVENTS  
    * @public
    * @static
    * @type {String} 
    * @default auth-not-authorized
    * 
    */
    
	notAuthorized : 'auth-not-authorized'
    
});
  