/*global angular */
/*global angular */
/*global auth */

/**
 * <b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#service-recipe' target='_blank'> angular.service </a> <br /><br/>   
 * <b>Parent Module:</b> {@link module:authModule authModule} <br /> <br /> 
 * <b>Description:</b> Store user data by returning in an  instance of the function object.                     
 * @module Session 
 * @memberof module:authModule 
 * @type Service
 */  


   

 
auth.service('Session', function () {
    
    "use strict";
    
    
   /**
    * Sets user credeltials.
    * @function  create 
    * @access public   
    * @param {String} userName
    * @param {String} userPass 
    * @param {String} userToken
    * @param {String} userProjects 
*/
    

    this.create = function (userName, userPass, userToken, userProjects) {
        this.name = userName;
	    this.pass = userPass;
	    this.token = userToken;
		this.projects = userProjects;
    };
    
    
    /**
    * Destroy user credentials. 
    * @function  destroy 
    * @access public 
    * @param {String} status
    */
    

    this.destroy = function () {
	    this.name = null;
	    this.pass = null;
	    this.token = null;
	    this.projects = null;
	};
            
});