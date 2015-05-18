/*global angular */
/*global angular */
/*global auth */

/**
*
* <b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#service-recipe' target='_blank'> angular.service </a> 
* 
* <b>Parent Module:</b> {@link module:authModule authModule}
*
* <b>Description:</b> Store user data by returning in an  instance of the function object. 
*
*
*
* @module Session 
* @memberof module:authModule 
* @type Service
*
*/

 
auth.service('Session', function () {
    
    "use strict";
    
    
    /**
    *
    * Sets user credeltials.
    *
    * @member  create 
    * @access public
    * @type function
    * @param {String} userName
    * @param {String} userPass 
    * @param {String} userToken        
    * @param {Object} userProjects 
    *
    */
    
    this.create = function (userName, userPass, userToken, userProjects) {
        this.name = userName;
	    this.pass = userPass;
	    this.token = userToken;
		this.projects = userProjects;
    };
    
    
    
    /**
    *
    * Destroy user credentials, sets data to null. 
    *
    * @member  destroy 
    * @access public 
    * @type function
	* @param no-arguments
    *
    */
    
    this.destroy = function () {
	    this.name = null;
	    this.pass = null;
	    this.token = null;
	    this.projects = null;
	};
            
});