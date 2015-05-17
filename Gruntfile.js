module.exports = function(grunt) {

  grunt.initConfig({

        
      
    /* Wrap NG templates */
    'ngtemplates': {
      'default': {
        'src': 'src/templates/**.html',
        'dest': 'dist/jsdoc-ng-templates.js',
        'options': {
          'module': 'jsDocNG-Templates',
          'bootstrap': function(module, script) {
            return "angular.module('" + module + "', [])"
                 + ".run(['$templateCache', function($templateCache) {"
                 + script + "}]);"
          },
          'url': function(url) { return url.substring(4); },
          'htmlmin': {
            collapseBooleanAttributes:      true,
            collapseWhitespace:             true,
            removeAttributeQuotes:          true,
            removeComments:                 true,
            removeEmptyAttributes:          true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true
          }
        },tasks:['ngtemplates']
      }
    },

    /* Uglify task */
    'uglify': {
      'defaut': {
        src: ['src/jsdoc-ng.js', 'dist/jsdoc-ng-templates.js'],
        dest: 'dist/jsdoc-ng.min.js',
        'options': { 'wrap': true }
      }
    },

    /* Lessify task */
    'less': {
      'defaut': {
        src: 'src/jsdoc-ng.less',
        dest: 'dist/jsdoc-ng.min.css',
        options: { compress: true }
      },tasks: ['less']
    },

    /* Sample doccos */
    'jsdoc-ng' : {
      'dist' : {
        template: 'jsdoc-ng',
        dest: 'documentation',
        src: ['yourJSToBeDocumented/**/*.js'],
        options: {
          "plugins": ["plugins/markdown"],
          "templates": {
            "cleverLinks":    true,
            "monospaceLinks": true,
            "windowTitle": "Maps App API",
            "minify": false
          },
          "markdown": {
            "parser": "gfm",
            "hardwrap": true
          }
        }
      }
    },
   
   remove: {
       default_options: {
                 trace: true,
          fileList: ['documentation/index.html'],
           tasks: [ 'remove' ]
          }
      }, 
      
     
        minifyHtml: {
        options: {
            cdata: true,
            comments:false
        },
        my_target: {
            files: {
                'documentation/index.html': 'documentation/index.html'
                     
            } 
        }
    },
      
      
      
      //When a file is changes runs all the above tasks
    watch: {
      grunt: { files: ['Gruntfile.js'] },
 
    /* remove: {
      //   files : 'yourJSToBeDocumented/**///*//.js',
        // tasks: [ 'remove' ]

   //   },
        
        

    
    'ngtemplates': {
       files: 'yourJSToBeDocumented/**/*.js',

        tasks:['ngtemplates']
      
    },

     minifyHtml:{
         files: 'yourJSToBeDocumented/**/*.js',
         tasks: ['minifyHtml']
      },
        
      uglify:{
         files: 'yourJSToBeDocumented/**/*.js',
         tasks: ['uglify']

      },   

      less: {
         files: 'yourJSToBeDocumented/**/*.js',
         tasks: ['less']

      },
        
      'jsdoc-ng' : {

           files : 'yourJSToBeDocumented/**/*.js',
           tasks: [ 'jsdoc-ng' ]
       },






    } 

  });

  /* Register ourself (sans NPN) */
  grunt.loadTasks("./tasks");

  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-remove');
      grunt.loadNpmTasks('grunt-minify-html');
   grunt.loadNpmTasks('grunt-contrib-watch');    
  /* Default task: requirejs then uglify */
 // grunt.registerTask('default', ['ngtemplates', 'uglify', 'less']);
  grunt.registerTask('samples', ['default', 'ngtemplates','uglify','jsdoc-ng']);
  grunt.registerTask('default', ['watch']);    

};
