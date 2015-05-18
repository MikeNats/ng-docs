/*global auth */

/**
*
* <b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#constant-recipe' target='_blank'> angular.constant </a>
*                  
* <b>Parent Module:</b> {@link module:authModule authModule} 
*
* <b>Description:</b> Contains authentication status messages. 
*
*
*
* @module  AUTH_EVENTS                           
* @memberof module:authModule             
* @type Constant  
*
*/

auth.constant('AUTH_EVENTS', {
    
    /** 
    * 
    * @member loginSuccess                                                      
    * @public  
    * @static 
    * @type {String}
    *
    */
    
	loginSuccess : 'auth-login-success',
    
    /**
    * 
    * @member   loginSuccess   
    * @public
    * @static
    * @type {String}
    * 
    */
    
	loginFailed : 'auth-login-failed',
    
    /**
    *
    * @member   logoutSuccess     
    * @public
    * @static
    * @type {String}
    * 
    */
    
	logoutSuccess : 'auth-logout-success',
    
    /**
    *
    * @member   sessionTimeout  
    * @static
    * @public
    * @type {String}
    *
    */
    
	sessionTimeout : 'auth-session-timeout',
    
    /**
    *
    * @member   notAuthenticated  
    * @public
    * @static
    * @type {String}
    *
    */
    
	notAuthenticated : 'auth-not-authenticated',
    
    /**
    *
    * @member   notAuthorized 
    * @public
    * @static
    * @type {String}
    *
    */
    
	notAuthorized : 'auth-not-authorized'
    
});
  