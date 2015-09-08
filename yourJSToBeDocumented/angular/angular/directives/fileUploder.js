/*global uiServices*/

/**   
* @framework angular  
* @kind jsConcept  
* @type directive
* @name fileUpload
* @memberof module:uiServices
* @Description  File uploader.
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/

uiServices.directive('fileUpload', [function (modelBuilder) {
	
	'use strict';
    
	/**
    * @member
    * @name return 
    * @memberof module:uiServices.fileUpload
    * @public
    * @return {Object} 
    * @Description Wired with  local scope that attribute {@link file-upload} creates.
    *
    * Type: {@link HTML-Attribute} 
    */
	
    return {
	    /**   
        * @class
        * @name scope  
        * @memberof module:uiServices.fileUpload.return
        * @classdesc  Directives Local Scope.
        */
     	
		scope: true,        //create a new scope
        
		/**  
		* @member 
		* @name link 
		* @param {Object} scope
		* @param {Object} el
		* @param {Object} attr
		* @memberof module:uiServices.fileUpload.return
		* @Description Once trigered  uploaded fileis been pushed push  upwords to scope {@link module:uiservice.mainAppController mainAppController}
		*/

		link: function (scope, el, attrs) {
			
			el.bind('change', function (event) {
				
				var file = event.target.files,
					i,
                    type,
                    name,
                    project = scope.project,
                    elementClass = attrs['class'].split(' ');
                

               
                
                if (elementClass[0] === 'imgCategory') {
                    
                    scope.project.settings.subCatergoryImage[elementClass[1]] = attrs.id;
			        
                    name =  'imgId' + scope.project.projectId + 'Caterory' + elementClass[1] + '.' + file[0].type.split('/')[1];
                    
                } else {
                    
                    name =  'csvId' + scope.project.projectId + '.csv';
                    
                }
            

				//push data in to mainAppController
                scope.$emit("UpdateModel", { file: file, fileName: name, project: project });
             
            });
        }
    };
}]);