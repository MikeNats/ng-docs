Google Maps App 
==============
Responsive single page application for non BI users.<br />
Provide the ability to non technical user's to visualize data using Google maps having as source a CSV file. 

<h4>Technologies:</h4>

* HTML 5   
* Zurd Foundation v5.5
* CSS 2/3
* SASS
* Angular JS v1.3.9
* Grunt JS
* Google Maps API v1.3
* PostCode Everywhere API
* Java/JSP v 6.0
* Oracle DB


Front End Architecture
--------------------
<h4><strong>HTML</strong></h4>
The Application makes use of JavaScript MVVC framework, Angular.<br />
The HTML of the app is <strong>not</strong> delivered by any server side scripting language. <br />
Its been loaded to client when the app is loaded and delivered dynamically, through the MVC Logic of Angular.<br />

The HTML is been deviated to templates/views. <br />
The templates/views are been appended into the index.html with the help of the router. <br /><br />
Every template/view comes with a controller that defines a local scope for that template/view.<br />
With the help of the local scopes that controllers define and with the usage of Directives and Services that access these scopes, a two way data binding is been achieved, creating an interactive UI.<br />

The templates/views that are been used are: <br />

<h3 class='docExample'>createEditTemplate</h3>
<h3 class='docExample'>createProjectTemplate</h3>
<h3 class='docExample'>editProjectTemplate </h3>
<h3 class='docExample'> logInTemplate </h3>
<h3 class='docExample'> mapTemplate </h3>
<h3 class='docExample'> navTemplate</h3>
<h3 class='docExample'>userTemplate </h3>
<h3 class='docExample'>viewMapTemplate </h3>



<h4><strong>CSS</strong></h4>  
--------------------
The app is been built with the usage of Zurb Foundation and SASS to created a responsive and easy to maintain app.<br />
The SASS files divided in three main folders: <br />

<h3 class='docExample'> Fonts</h3>
<h3 class='docExample'> Navigation</h3>
<h3 class='docExample'> Left Panel</h3>
<h3 class='docExample'>  Right Panel</h3>



<h4><strong>JavaScript</strong></h4>
--------------------
The Application is been divided into four modules:

The [app](#!/module:app) module is on the top level of the hierarchy. The rest three modules are dependencies of the App.

That modular approach makes the application scalable and easy to be tested as the functionalities are decoupled.

	
<h3 class='literal'><span class='kind'>module</span> <span>[app](#!/module:app)</span></h3>
Bootstraps the app and defines.
* Implements the routing of the app.
* Executes user authentication using the services of [authModule](#!/module:authModule)

<h3 class='literal'><span class='kind'>module</span> <span>[authModule](#!/module:authModule)</span></h3>
Provides authentication services:
* Authenticate a user
* Create a session

<h3 class='literal'><span class='kind'>module</span> <span>[mapModule](#!/module:mapModule)</span></h3> 
Provides  Google maps services:
* Google Map Library
* Map positioning
* Markers
* Heat Map
* KML layers
* Time line
* CSV to Json conversion
* Postcode to Lat/lot conversion

<h3 class='literal'><span class='kind'>module</span> <span>[uiService](#!/module:uiService)</span></h3> 
Provides all the intermediate services to achieve communication between UI and [mapModule](#!/module:mapModule)
* Tigers :<br />
	Google Map Library<br />
	Map positioning<br />
	Markers<br />
	Heat Map<br />
	KML layers<br />
	Time line<br />
	CSV to Json conversion<br />
	Postcode to Lat/lot conversion
* popUp
* animations


Maintenance of the App
---------------------------
<h4>About</h4> 
The development environment of the app is consisted from the below folders:

* <strong>app </strong><br /> 
	Contains the minified version of the app. The folder is been updated dynamical from automated build that are defined to Grunt.js file. All the files of the app are been included automatically from the development environment. That folder should be then uploaded in the server as it is. 
	
* <strong>bower_components </strong><br /> 
	Contains all the necessary files for foundation
	
* <strong>css </strong><br /> 
	Contains the minified development version of the css. Its been produces dynamical from automated build that are defined to Grunt.js file
	
* <strong>js </strong><br /> 
	Contains the JavaScripts for the  development environment	
	
* <strong>scss </strong><br /> 
	Contains the SASS files
	
* <strong>node_modules </strong><br /> 
	Contains the node modules that are needed from the Grunt to implement the automated builds
	
* <strong>view </strong><br /> 
	Contains the views of the App. In the development environment use of unminified.
	
* <strong>Grunt.js </strong><br /> 
	Task manager for automated builds
	
* <strong>index.html </strong><br /> 
	The index page of the app.
	
<br/>
<h4>Grunt</h4>	
The Development environment of the app is been automated with Grunt.<br/>
Every time that a change is been applied, Grunt will validated the code, minified and extract the resulted app into the app folder.<br/>
Before any change is been applied to the development files, <strong>Grunt must be triggered</strong>.

To triger Grunt open CMD:<br />

```bash
cd pathToTheDevelopmentStack
```
```bash
grunt watch
```
