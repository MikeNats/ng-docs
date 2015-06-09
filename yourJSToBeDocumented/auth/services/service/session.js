/*global angular */
/*global angular */
/*global auth */

 
/**   
*
* @framework angular
* @kind jsConcept  
* @type Service
* @name Session
* @memberof module:authModule 
* @Description Stores user data by returning in an  instance of the function object.       
* @requires $http
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9
*/


auth.service('Session', function () {
    
    "use strict";
    
    
    /**
    *
    * @member  create
    * @memberof module:authModule.Session
    * @access public
    * @type function
    * @param {String} userName
    * @param {String} userPass 
    * @param {String} userToken        
    * @param {Object} userProjects 
    *
    * @summary Sets user credeltials.
    */
    
    this.create = function (userName, userPass, userToken, userProjects) {
        this.name = userName;
	    this.pass = userPass;
	    this.token = userToken;
		this.projects = userProjects;
    };
    
    
    
    /** 
    *
    * @member  destroy
    * @memberof module:authModule.Session
    * @access public 
    * @type function
	* @param no-arguments
    *
	* @summary Destroy user credentials, sets data to null.
    */
    
    this.destroy = function () {
	    this.name = null;
	    this.pass = null;
	    this.token = null;
	    this.projects = null;
	};
            
});