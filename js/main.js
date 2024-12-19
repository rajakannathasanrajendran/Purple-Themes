/*-----------------------------------------------------------------------------------

    Theme Name: Eatnow - Restaurant and Cafe HTML Template
    Description: Restaurant and Cafe HTML Template
    Author: Chitrakoot Web
    Version: 1.0
        
    ---------------------------------- */    

!function(o){"use strict";var s=o(window);function t(){var e,t;e=o(".full-screen"),t=s.height(),e.css("min-height",t),e=o("header").height(),t=o(".screen-height"),e=s.height()-e,t.css("height",e)}o("#preloader").fadeOut("normall",function(){o(this).remove()}),s.on("scroll",function(){var e=s.scrollTop(),t=o(".navbar-brand img"),a=o(".navbar-brand.logodefault img");e<=50?(o("header").removeClass("scrollHeader").addClass("fixedHeader"),t.attr("src","img/logos/logo-inner.png")):(o("header").removeClass("fixedHeader").addClass("scrollHeader"),t.attr("src","img/logos/logo.png")),a.attr("src","img/logos/logo.png")}),s.on("scroll",function(){500<o(this).scrollTop()?o(".scroll-to-top").fadeIn(400):o(".scroll-to-top").fadeOut(400)}),o(".scroll-to-top").on("click",function(e){e.preventDefault(),o("html, body").animate({scrollTop:0},600)}),o(".parallax,.bg-img").each(function(e){o(this).attr("data-background")&&o(this).css("background-image","url("+o(this).data("background")+")")}),o(".story-video").magnificPopup({delegate:".video",type:"iframe"}),o(".form_date").datetimepicker({language:"en",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,minView:2,forceParse:0}),o(".form_time").datetimepicker({language:"en",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:1,minView:0,maxView:1,forceParse:0}),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init(),s.resize(function(e){setTimeout(function(){t()},500),e.preventDefault()}),t(),o(document).ready(function(){o(".testimonial-carousel1").owlCarousel({loop:!0,responsiveClass:!0,nav:!0,navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],dots:!1,margin:50,center:!1,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1500,items:1}),o(".testimonial-carousel2").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,autoplayTimeout:8e3,smartSpeed:1500,nav:!1,dots:!0,thumbs:!1,thumbsPrerendered:!1,center:!1,margin:50,items:1}),o(".instagram-carousel").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1500,nav:!1,dots:!1,center:!1,responsive:{0:{items:1},576:{items:2},768:{items:3},992:{items:4},1200:{items:5}}}),o(".gallery-carousel").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1500,nav:!1,dots:!1,center:!1,responsive:{0:{items:1},576:{items:2},768:{items:2},992:{items:3},1200:{items:4}}}),o(".team-carousel").owlCarousel({loop:!0,responsiveClass:!0,autoplay:!0,autoplayTimeout:5e3,smartSpeed:1500,nav:!1,dots:!1,center:!1,margin:30,responsive:{0:{items:1},576:{items:2},768:{items:2},992:{items:2},1200:{items:2}}}),o(".slider-fade1").owlCarousel({items:1,loop:!0,dots:!1,margin:0,nav:!1,navText:["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],autoplay:!0,autoplayTimeout:6e3,smartSpeed:1500,animateIn:"fadeIn",animateOut:"fadeOut"}),o(".slider-fade2").owlCarousel({items:1,loop:!0,dots:!0,margin:0,nav:!1,navText:["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],autoplay:!0,autoplayTimeout:6e3,smartSpeed:1500,animateIn:"fadeIn",animateOut:"fadeOut"}),o(".owl-carousel").owlCarousel({items:1,loop:!0,dots:!1,margin:0,autoplay:!0,smartSpeed:500}),0!==o(".horizontaltab").length&&o(".horizontaltab").easyResponsiveTabs({type:"default",width:"auto",fit:!0,tabidentify:"hor_1",activate:function(e){var t=o(this),a=o("#nested-tabInfo");o("span",a).text(t.text()),a.show()}}),o(".countup").counterUp({delay:25,time:2e3}),o(".countdown").countdown({date:"01 Dec 2026 00:01:00",format:"on"}),o(".current-year").text((new Date).getFullYear())}),s.on("load",function(){o(".portfolio-gallery").lightGallery(),o(".portfolio-link").on("click",e=>{e.stopPropagation()})})}(jQuery);