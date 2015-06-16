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


Architecture:
--------------------
<h4>HTML</h4>
The Application makes use of JavaScript MVVC framework, Angular.<br />
The HTML of the app is <strong>not</strong> delivered from JSP pages or any other server side scripting laguage. <br />
Its been loaded to client when the app is loaded and delivered dynamically, througth the MVC Logic of Angular.

The HTML is been divated to templates/views. <br />
The templates/views are been appended into the index.html with the help of the router. <br /><br />
Every template/view cames with a controller that defines a local scope for that template/view.<br />
With the help of the local scopes that controllers define and with the usage of Directives and Services that have access to that scopes, a two way data binding is been achived, creating an itercative UI.

The templates/views that are been used are:<br/>

* createEditTemplate
* createProjectTemplate
* editProjectTemplate
* logInTemplate
* mapTemplate
* navTemplate
* userTemplate
* viewMapTemplate 

<br/>
<br/>

<h4>CSS</h4>
The app is been built with the usage of Zurb Foundation and SASS to created a responsive and easy to maintain app.
The SASS files devided in three main folders:

* Fonts
* Navigation
* Left Panel
* Right Panel

<br/>
<br/>

<h4>JavaScript</h4>
The Application is been devided into four modules:

The [app](#!/module:app) module is on the top level of the hierarchy. The rest three modules are dependencies of the App.

That modular approach makes the application scalable and easy to be teasted as the functionalities are decoupled.

<h3 class='literal'><span class='kind'>module</span> <span>[app](#!/module:app)</span></h3>
Bootstrapts the app and defines.
* Implements the routing of the app.
* Executes user authentication using the services of [authModule](#!/module:authModule)

<h3 class='literal'><span class='kind'>module</span> <span>[authModule](#!/module:authModule)</span></h3>
Provides authentication services:
* Autheticate a user
* Create a session

<h3 class='literal'><span class='kind'>module</span> <span>[mapModule](#!/module:mapModule)</span></h3> 
Provides  Google maps services:
* Google Map Library
* Map positioning
* Markers
* Heat Map
* KML layers
* Timeline
* CSV to Json convertion
* Postcode to Lat/lot convertion

<h3 class='literal'><span class='kind'>module</span> <span>[uiService](#!/module:uiService)</span></h3> 
Provides all the intermidiate services to achive interactivity between UI and [mapModule](#!/module:mapModule)
* Trigers :
> * Google Map Library
> * Map positioning
> * Markers
> * Heat Map
> * KML layers
> * Timeline
> * CSV to Json convertion
> * Postcode to Lat/lot convertion
* popUp
* animations


Maintenaince of the App
---------------------------
<h4>About</h4> 
The development enviroment of the app is consistanced from the below folders:

* <strong>app </strong><br /> 
	Contains the minified version of the app. The folder is been updated dinamicly from automated build that are defined to Grunt.js file. All the files of the app are been included automatically from the development enviroment. That folder should be then uploaded in the server as it is. 
	
* <strong>bower_components </strong><br /> 
	Contains all the nessesary files for foundation
	
* <strong>css </strong><br /> 
	Contains the minified development version of the css.Its been produces dinamicly from automated build that are defined to Grunt.js file
	
* <strong>csv </strong><br /> 
	Contains test csv's for development perpouses
	
* <strong>js </strong><br /> 
	Contains the JavaScripts for the  development enviroment	
	
* <strong>scss </strong><br /> 
	Contains the SASS files
	
* <strong>node_modules </strong><br /> 
	Contains the node modules that are needed from the Grunt to implement the automated builds
	
* <strong>view </strong><br /> 
	Contains the views of the App. In the development enviroment use of unminified.
	
* <strong>Grunt.js </strong><br /> 
	Task manager for automated builds
	
* <strong>index.html </strong><br /> 
	The index page of the app.
	
<br/>
<h4>Grunt</h4>	
The Develpment enviroment of the app is been automated with Grunt.<br/>
Every time that a change is been applied, Grunt will validated the code, minified and extract the resulted app into the app folder.<br/>
Before any change is been applied to the development files, <strong>Grunt must be trigered</strong>.

To triger Grunt open CMD:<br />

```bash
cd pathToTheDevelopmentStack
```
```bash
grunt watch
```
