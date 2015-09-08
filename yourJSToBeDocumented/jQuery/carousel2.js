/*jshint -W065 */
/*global jQuery*/


/**   
* @framework jQuery  
* @kind module  
* @name basicResposiveCarousel
* @variable basicResposiveCarousel 
* @Description responsive Carousel
* @public
* @static
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


var basicResposiveCarousel = (function ($, window, document) {
    
    'use strict';
     
    /**   
    * @function
    * @kind jsConcept
    * @type native
    * @name anonymous  
    * @memberof module:basicResposiveCarousel
    */ 
    
    /**   
    * @class
    * @name rCarousel  
    * @memberof module:basicResposiveCarousel.anonymous
    * @classdesc  Non responsive Implementation
    */   
    
    var rCarousel = {
        
     

        /**   
        * @member 
        * @name carouselUlLiLast  
        * @type {Object}
        * @memberof module:basicResposiveCarousel.anonymous.rCarousel
        * @Description carousel Ul Li Last
        */  
        
        carouselUlLiLast : $('.carousel > ul li:last'),
        
        /**   
        * @member 
        * @name animationVelocity  
        * @type {Integer}
        * @memberof module:basicResposiveCarousel.anonymous.rCarousel
        * @Description animationVelocity
        */ 
        
        animationVelocity : 1000,
        
        /**   
        * @member 
        * @name timeout  
        * @type {Integer}
        * @memberof module:basicResposiveCarousel.anonymous.rCarousel
        * @Description timeout
        */   
        
        timeout: 0,
    
    
        /**   
        * @event 
        * @name clickPrev
        * @param no-arguments    
        * @memberof module:basicResposiveCarousel.anonymous.rCarousel
        * @Description click Prev Button
        */         
        
        clickPrev: function () {
            $('.prev').click(function () {//Prev Click
                rCarousel.executePrevSlide();
            }); 
        },
  
        /**   
        * @event 
        * @name windowResize 
        * @param no-arguments    
        * @memberof module:basicResposiveCarousel.anonymous.rCarousel
        * @Description windowResize recalculate dimentions and margins
        */ 
        
        windowResize: function () {
            $(window).resize(function () { //recalculate dimentions and margins
                rCarousel.setCarouselLiDim();
                rCarousel.onResizeRecalculateUlMargin();
            });
        },

        /**   
        * @event 
        * @name clickNext
        * @param no-arguments    
        * @memberof module:basicResposiveCarousel.anonymous.rCarousel
        * @Description click Next
        */ 
        
        clickNext: function () {
            $('.next').click(function () { //Next Click 
                rCarousel.executeNextSlide();
            });
        },
        
        /**   
        * @function 
        * @name executeNextSlide
        * @param no-arguments    
        * @memberof module:basicResposiveCarousel.anonymous.rCarousel
        * @Description execute Next Slide
        */    
        
        executeNextSlide: function () {
            if (rCarousel.timeout === 0) {
                if (!(rCarousel.isLast() === 'lastActive')) {
                    rCarousel.timeout = 1;
                    rCarousel.setNextActive();
                    rCarousel.slideNext(); //slide Next
                }
            }
        },
        
        
        /**   
        * @function 
        * @name executePrevSlide
        * @param no-arguments    
        * @memberof module:basicResposiveCarousel.anonymous.rCarousel
        * @Description execute Prev Slide
        */   
        
        executePrevSlide: function () {
            if (rCarousel.timeout === 0) {
                if (!(rCarousel.isFirst() === 'firstActive')) {
                    rCarousel.timeout = 1;
                    rCarousel.setPrevActive();
                    rCarousel.slidePrev(); //slide Prev
                }
            }
        },
        
        /**   
        * @class 
        * @name setCarouselLiDim   
        * @memberof module:basicResposiveCarousel.anonymous.rCarousel
        * @classdesc set Carousel Li Dimention
        */     
        
        setCarouselLiDim : function () { // set LI Width
         
             $('.carousel > ul li').css('width', rCarousel.carousel.width());
            
            /**   
            * @class
            * @name testClass  
            * @memberof module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim
            * @classdesc  test inner class
            */  

            var testClass = {
                
                /**   
                * @member 
                * @name attr1  
                * @type {Integer}
                * @memberof module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass
                * @Description test desc for attr1
                */  
                
                attr1 : 0,
                
                /**   
                * @member 
                * @name attr2  
                * @type {String}
                * @memberof module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass
                * @Description test desc for attr2
                */  
                
                attr2 : 'attributeValue',
                
                /**   
                * @member 
                * @name memberFunction
                * @param no-arguments 
                * @return {String}
                * @memberof module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass
                * @Description test inner function desc
                */  
                
                memberFunction : function () {
                 
                    return dadadad.attr2;
                
                }
            
            
            
            }
        },

   
        
        /**   
        * @function 
        * @name isFirst
        * @param no-arguments    
        * @memberof module:basicResposiveCarousel.rCarousel
        * @Description is First
        */   
        
        isFirst: function () {
            if ($('.first').hasClass('active')) {
                return 'firstActive';
            } 
        }
       
    };
    
    /**   
    * @function 
    * @name return
    * @return Object   
    * @memberof module:basicResposiveCarousel.anonymous
    * @Description carousel
    */   
    return rCarousel;
    
}(jQuery, window, document));
 
 