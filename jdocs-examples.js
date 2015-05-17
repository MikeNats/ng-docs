
/** Below you can find basic syntax of java docs:
* @class  example1
* @classdesc  example1
* @extends  example1
* @function
* @name
* @memberof
* @property @@
* @param @@
* @event
* @example -
* **NOTE**:
* @@ Types: {Boolean}, {String}, {String[]}, {String|String[]}, {Function}, {Integer}, {Array}, {Object}, {Array|Object}, {Event} e

*/



/***********************   CLASS/Objects  example1 ************************/
/**
 * Here goes the description.
 * @class
 * @classdesc A long winded description of the class!
 * @extends Parent  
 * When you include extends all the properties and methos for the parent call became visible to child in the documentation.
 */
var Child = function () {
};

/************************ Properties  *********************/

/**
 * Here goes the description.
 * @property {Boolean}
 */
Child.testPropertyInChild;



/************************  Methods  *********************/


/**
 * Here goes the description of the method.
 * @param {String|String[]} [paramA=Default Value] Here goes the description of the property.
 * @param {namespace.Car} [paramB] Here goes the description of the property.
 * @param {Function} [paramCallback] Here goes the description of the property type function.
 * @param {String} paramCallback.firstParam Here goes the description of the property type string.
 * @return {Array|Object} Here goes the description for the return.
 */
Child.testMethod : function (paramA, paramB, paramCallback) {
    return {};
}


