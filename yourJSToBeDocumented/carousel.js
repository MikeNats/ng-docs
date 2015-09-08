/*global jQuery*/
/*jshint -W007 */

(function ($, window, document) {
    
    'use strict';
    
    var topCarousel = {
        htmlBody: $('body'),
        carousel: $('.topBannerCarousel'),
        carouselLi : $('.topBannerCarousel li'),
        carouselLiFirst : $('.topBannerCarousel li:first-child'),
        carouselLiLast : $('.topBannerCarousel li:last-child'),
        carouselChildren: $('.topBannerCarousel *'),
        tabControls : $('.TabControls'),
        tabControlsLi : $('.TabControls ul li'),
        FF : function () { return !(window.mozInnerScreenX === null); },
        IE: 'IE',
        NonIE : 'NoNIE',
        infinityLoop : null,
        firstLoop : null,
        velocity: 5000,
        initiator : 1,
        hoverIndicator : 1,
        
        //Implements according to Browser
        init: function () {
            if ($.browser.msie) {//IE implementation
                
                topCarousel.setIEGlobalBrowserCssIndicator();
                topCarousel.Implementation(topCarousel.IE);
                
            } else {//NON IE  implementation
                topCarousel.setNonIEIndicators();
                topCarousel.detectMousePosition();
            }
        },
        
        detectMousePosition: function () {
            topCarousel.mouseIsOver();
            topCarousel.mouseIsNotOver();
        
        },
        
        mouseIsOver: function () {
            topCarousel.carouselLi.hover(function () {
                if (topCarousel.initiator === 1) {
                    topCarousel.hoverIndicator = 0;
                    topCarousel.initiator = 0;
                }
            }, function () {
                if (topCarousel.initiator === 0) {
                    topCarousel.Implementation(topCarousel.NoNIE);
                    topCarousel.hoverIndicator = 2;
                    topCarousel.initiator = 2;
                }
            });
        },
        
        mouseIsNotOver: function () {
            setTimeout(function () {
                if (topCarousel.hoverIndicator === 1) {
                    
                    topCarousel.Implementation(topCarousel.NoNIE);
                    topCarousel.initiator = 2;
                    topCarousel.hoverIndicator = 2;
                }
            }, 300);
        },
        
        //Implements the carousel non IE
        Implementation: function (Browser) {
            topCarousel.initialization(Browser);//initialization of the carousel 
            topCarousel.interaction(Browser);// user interaction and behaviour 
        },
        
        interaction: function (Browser) {
            topCarousel.hoveringTabs(Browser);//event hovering the tabs
            topCarousel.hoveringCarousel(Browser);//event hovering the carousel nodes
        },
        
        // When tabs are hovered the mached tab is selected and infinity rotation stops
        hoveringTabs: function (Browser) {
            topCarousel.tabControlsLi.hover(function (event) {
                
                topCarousel.setActiveNodeWhenTabIsHovered(event.target, Browser);
                topCarousel.stopInfinity();
                
            }, function () {
                topCarousel.removeForceActiveClass();
                topCarousel.infinity(Browser);
                topCarousel.setActiveTabHoveringtoCarouselNode(Browser);
            });
        },
        
        //detects the hovered tab and set's the mached carousel node active implementing the animation
        setActiveNodeWhenTabIsHovered: function (tab, Browser) {
            topCarousel.removeActiveClassTabMenu();//remove active from tabs
            if (Browser === 'IE') {
                topCarousel.IEaddActiveClassUsingNum(topCarousel.findActiveHoveredTab(tab));
                topCarousel.IEanimation();
            } else {
                topCarousel.NoNIEaddActiveClassUsingNum(topCarousel.findActiveHoveredTab(tab));
                topCarousel.addForceActiveClass(topCarousel.findActiveHoveredTab(tab));
            }
        },
        
        //remove active from tabs
        removeActiveClassTabMenu : function () {
            topCarousel.tabControlsLi.removeClass('active');
        },
        
        //force animation to happen
        addForceActiveClass: function (hoverdTab) {
            $('#slide' + hoverdTab).addClass('ForceActive');
        },
        
        IEaddActiveClassUsingNum: function (hoverdTab) {//set active the Carousel Li according to the matched tab
            topCarousel.carouselLi.removeClass('IEactive');
            topCarousel.carouselLi.addClass('IEInActive');
            $('#slide' + hoverdTab).addClass('IEactive');
            $('#slide' + hoverdTab).removeClass('IEInActive');
        },
        
        NoNIEaddActiveClassUsingNum: function (hoverdTab) {//set active the Carousel Li according to the matched tab
            topCarousel.carouselLi.removeClass('active');
            $('#slide' + hoverdTab).addClass('active');
        },
        
        removeForceActiveClass: function () {//stops adhoc animation
            topCarousel.carouselLi.removeClass('ForceActive');
        },
        
        findActiveHoveredTab: function (tab) {//find hovered node
            var curentNode = $(tab).attr('id');
            curentNode = curentNode.substr(curentNode.length - 1);
            return curentNode;
        },
        
        findActiveHoveredListItem: function (listItem) {//find hovered node
            var curentNode = $(listItem).attr('id');
            curentNode = curentNode.substr(curentNode.length - 1);
            return curentNode;
        },
        
        setActiveTabHoveringtoCarouselNode: function (Browser) {
            var activeList;
            if (Browser === 'IE') {
                activeList = $('.topBannerCarousel li.IEactive');
            } else {
                activeList = $('.topBannerCarousel li.active');
            }
            topCarousel.setActiveTabNode(topCarousel.findActiveHoveredListItem(activeList));
        },
        
        hoveringCarousel: function (Browser) {//When carousel nodes are been hovered  the rotation stopped in the current selected tap
            topCarousel.carouselLi.hover(function () {
                topCarousel.stopInfinity();
                topCarousel.setActiveTabHoveringtoCarouselNode(Browser);
            }, function () {
                topCarousel.infinity(Browser);
            });
        },
        
        initialization: function (Browser) {
            topCarousel.setupClassesAndIds();//Sets Class's & Id's 
            topCarousel.infinity(Browser);//Execute the rotation 
        },
        
        setupClassesAndIds : function () {//initialize Classes and Id's
            topCarousel.setClassIdsCarousel();
            topCarousel.setIdsTabMenu();
        },
        
        infinity: function (Browser) {//Execute the rotation   
            topCarousel.infinityLoop =  setInterval(function () {
                topCarousel.carouselLiFirst.removeClass('firstTime');
                topCarousel.rotation(Browser);
            }, topCarousel.velocity);
        },
        
        stopInfinity: function () {//Stop infinity loop
            clearInterval(topCarousel.infinityLoop);
            clearInterval(topCarousel.firstLoop);
        },
        
        rotation: function (Browser) {//Rotation, rotate the class active for Carousel Li and Tab Li,active execute the animation for Non IE browsers and IEanimation for IE
            var active  = topCarousel.rotateNextActiveCarouselNode(Browser); //rotate Carousel 
            topCarousel.rotateNextActiveTabNode(active);//rotate Tabs 
            if (Browser === 'IE') {
                topCarousel.IEanimation();
            }
        },
        rotateNextActiveTabNode: function (active) {//Gets as argoument the active Carousel Node and sets the Tab node active
            var curentNode =  active.attr('id');
            curentNode = curentNode.substr(curentNode.length - 1);
            topCarousel.setActiveTabNode(curentNode);
        },
        
        setActiveTabNode: function (curentNode) {//gets the active carousel node and sets active
            topCarousel.tabControlsLi.removeClass('active');
            $('#tab' + curentNode).addClass('active');
        },
        
        rotateNextActiveCarouselNode: function (Browser) {//Iterates Active class
            var activeNode;
            if (Browser === 'IE') {
                activeNode =  topCarousel.IErotateNextActiveCarouselNode();
            } else {
                activeNode =  topCarousel.NoNIErotateNextActiveCarouselNode();
            }
            return activeNode;
        },
        
        IErotateNextActiveCarouselNode: function () {//Makes next node  Active
            var activeNode = $('.topBannerCarousel li.IEactive');
            if (!activeNode.hasClass('last')) {//If is not the last carousel node 
                activeNode.removeClass('IEactive');
                topCarousel.carouselLi.addClass('IEInActive');
                activeNode.next().addClass('IEactive');
                activeNode.next().removeClass('IEInActive');

            } else {
                activeNode.removeClass('IEactive');
                activeNode.addClass('IEInActive');
                topCarousel.carouselLiFirst.addClass('IEactive');
                topCarousel.carouselLiFirst.removeClass('IEInActive');
            }
            return $('.topBannerCarousel li.IEactive');
        },
        
        NoNIErotateNextActiveCarouselNode: function () {//Makes next node  Active
            var activeNode = $('.topBannerCarousel li.active');
            if (!activeNode.hasClass('last')) {//If is not the last carousel node 
                activeNode.removeClass('active');
                activeNode.next().addClass('active');

            } else {
                activeNode.removeClass('active');
                topCarousel.carouselLiFirst.addClass('active');
            }
            return $('.topBannerCarousel li.active');
        },
        
        IEanimation: function () {// IE animation
            $('.topBannerCarousel li.IEactive').animate({opacity: 1}, {duration: 1000, complete: function () {
                $('.topBannerCarousel li.IEactive').css('zIndex', '99');
            }});
            $('.topBannerCarousel li.IEInActive').animate({opacity: 0}, {duration: 1000, complete: function () {
                $('.topBannerCarousel li.IEInActive').css('zIndex', '0');
            }});

        },
        
        setClassIdsCarousel: function () {//Sets Class's & Id's for the Carousel
            var listItemCarousel = 1;
            topCarousel.carouselLi.each(function () {
                $(this).attr('id', 'slide' + listItemCarousel);
                listItemCarousel += listItemCarousel;
            });
            topCarousel.carouselLiLast.addClass('last');
        },
        
        setIdsTabMenu: function () {//Sets Class's & Id's for the TabMenu
            var listItemTab = 1;
            topCarousel.tabControlsLi.each(function () {
                $(this).attr('id', 'tab' + listItemTab);
                listItemTab += listItemTab;
            });
        },
        
        setIEGlobalBrowserCssIndicator: function () {
            topCarousel.htmlBody.removeClass('NONIE');
            topCarousel.htmlBody.addClass('IE');
            topCarousel.carouselLiFirst.removeClass('active');
            topCarousel.carouselLiFirst.addClass('IEactive');
        },
        
        setNonIEIndicators: function () {
            topCarousel.carouselLiFirst.addClass('active');
            topCarousel.carouselLiFirst.addClass('firstTime');
        }
    };
    
    $(function () {//execute carousel
        $(document).ready(function () {
            topCarousel.init();
        });
    });
}(jQuery, window, document));