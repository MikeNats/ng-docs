/*global auth */
/**
 * <b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#constant-recipe' target='_blank'> angular.constant </a>
 <br /><br/>                     
 * <b>Parent Module:</b> {@link module:authModule authModule} <br /> <br /> 
 * <b>Description:</b> Contains authentication status messages.   <br /><br/>
 * @module  AUTH_EVENTS                           
 * @memberof module:authModule             
 * @type Constant    
 */

auth.constant('AUTH_EVENTS', {
    
    /**   
     * @member loginSuccess                                                      
     * @public  
     * @static 
     * @return {String} auth-login-success
    */
	loginSuccess : 'auth-login-success',
    
    /**
     * @member   loginSuccess   
     * @public
     * @static
     * @return {String} auth-login-failed         
    */
	loginFailed : 'auth-login-failed',
    
    /**
     * @member   logoutSuccess     
     * @public
     * @static
     * @return {String} auth-logout-success
    */
	logoutSuccess : 'auth-logout-success',
    
    /**
     * @member   sessionTimeout  
     * @static
     * @public
     * @return {String} auth-session-timeout
    */
	sessionTimeout : 'auth-session-timeout',
    
    /**
     * @member   notAuthenticated  
     * @public
     * @static
     * @return {String} auth-not-authenticated
    */
	notAuthenticated : 'auth-not-authenticated',
    
    /**
     * @member   notAuthorized 
     * @public
     * @static
     * @return {String} auth-not-authorized
    */
	notAuthorized : 'auth-not-authorized'
    
});
  