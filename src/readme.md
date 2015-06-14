Documentation for Extended JavaScript Documentation App.

    ► Module:
            /**
        
		1)	* @kind module
		
		2)  * @type native, angular, nodeJS ...  
				
				• 'native': for custom native JavaScript modules(module pattern variations). 
				• 'angular': for Angular modules etc...
				• Following that pattern the templating  engine can now be extended for other JavaScript frameworks based on var $scope.module.type.names[0].  

		3)	* @name moduleName
				
				• For custom native JavaScript modules '@name' can be described as: 
				
					○ myNameSpace:
					
						 function ((myNameSpace, $)) {
							
							myNameSpace.doSomething = {
									//doStaff
							} 
							
						})(window.myNameSpace = window.myNameSpace || {}, jQuery);
					
					○ anonymousFunction:
						
						(function () {
							// ... vars, functions.
						}());
													
		
		4)	* @variableName
			
				• Name of the variable that the module is been assigned.
			
		5)  * @description

				• Description of the module.
                
        6)  * @requires
        
				• Is used to Describe dependancies of a module. array of data @requires x,  @requires y,  @requires z,  @requires k.	
    
        7)  * @author
			
				• Is used to Describe authors. array of data.  @author name lastname,  @author name lastname,  @author name lastname
                
        8)  * @version
			
				• Is used to Describe release of the app.              
                
        9)  * @since
			
				• Is used to Describe the framework that is used: Angular.1.3.9 etc...
                
            *
            */