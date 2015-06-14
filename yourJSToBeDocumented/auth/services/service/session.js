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
*   
* @requires $http
*
* @Description Stores user data by returning in an  instance of the function object.    
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9
*/


auth.service('Session', function () {
    
    "use strict";
    
    /**
    * 
    * @class 
    * @name Session  
    * @memberof module:authModule.Session
    *   
    * @classdesc  Stores user data by returning in an  instance of the function object.
    *  
    */
       
    /**
    *  @instance
    *  @name name
    *  @public
    *  @type {string}
    *  @memberof module:authModule.Session.Session
    */
    
    this.name = null;
    
    /**
    *  @instance
    *  @name pass
    *  @public
    *  @type {string}
    *  @memberof module:authModule.Session.Session
    */
    
    this.pass = null;
    
    /**
    *  @instance
    *  @name token
    *  @public
    *  @type {string}    
    *  @memberof module:authModule.Session.Session
    */
    
    this.token = null;
    
    /**
    *  @instance
    *  @name projects
    *  @public
    *  @type {object}  
    *  @memberof module:authModule.Session.Session
    */

    this.projects = null;
    
    /** 
    *
    * @member
    * @memberof module:authModule.Session.Session
    * @name create
    * @access public 
    * @instance 
    *
    * @param {String} userName
    * @param {String} userPass 
    * @param {String} userToken        
    * @param {Object} userProjects 
    *
    * @description Sets user credeltials.
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
    * @member
    * @memberof  module:authModule.Session.Session
    * @name destroy 
    * @access public 
    * @instance
    *
	* @param no-arguments
    *
	* @description Destroy user credentials, sets data to null.
    *
    */
    
    this.destroy = function () {
	    this.name = null;
	    this.pass = null;
	    this.token = null;
	    this.projects = null;
	};
            
});