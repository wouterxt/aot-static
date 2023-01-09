
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

	$(document).ready(function () {
	    //$('#mc_embed_signup').find('form').ajaxChimp();
	    // $('.content-main p span.span1').html('text1').addClass("img-fluid");
	    // float images in richtexteditor
	    // $("div").addClass("img-fluid");
	    $(".content-main p span.img-left > img").addClass("img-fluid").addClass("float-left");
	    $(".content-main p span.img-right > img").addClass("img-fluid").addClass("float-right");
	    $(".content-sidebar p span.img-left > img").addClass("img-fluid").addClass("float-left");
	    $(".content-main p span.img-centre > img").addClass("img-fluid").addClass("mx-auto").addClass("d-block");
	    $(".content-sidebar p span.img-right > img").addClass("img-fluid").addClass("float-right");
	    $(".content-sidebar p span.img-centre > img").addClass("img-fluid").addClass("mx-auto").addClass("d-block");
	    // $(".content-main p span.img-left > img").addClass("img-fluid").removeAttr('style').parent().css("float", "none");
	    // $(".content-main p span.img-left > img").addClass("float-left").addClass("img-fluid").removeAttr('style').parent().css("float", "none");
	    // $(".content p span.img-right > img").addClass("float-right").addClass("img-fluid").removeAttr('style').parent().css("float", "none");
	    // $(".content p span.img-center > img").addClass("mx-auto").addClass("img-fluid").addClass("d-block").removeAttr('style').parent().css("float", "none");
	});
     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $('#atnav').toggleClass('d-none');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        //$(".main-menu").addClass('mobile-menu');
    });
    $(".mob-bar").on('click', function (e) {
        e.preventDefault();
        $('#mobnav').toggleClass('d-none');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        //$(".main-menu").addClass('mobile-menu');
    });
     
    //$('select').niceSelect();
    //$('.img-pop-up').magnificPopup({
    //    type: 'image',
    //    gallery:{
    //    enabled:true
    //    }
    //});

    //  Counter Js 

    //$('.counter').counterUp({
    //    delay: 10,
    //    time: 1000
    //});

        
    // -------   Mail Send ajax

    // $(document).ready(function() {


    //   // Video lightbox

    //    $('.play-btn').magnificPopup({
    //        disableOn: 700,
    //        type: 'iframe',
    //        mainClass: 'mfp-fade',
    //        removalDelay: 160,
    //        preloader: false,
    //        fixedContentPos: false
    //    });


    //  //  testimonail carusel

      
    //});
 });
