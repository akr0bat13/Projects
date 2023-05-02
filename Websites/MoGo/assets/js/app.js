$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

        //console.log(introH);

        /* Fixed Header */

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        //console.log(scrollOffset);

        checkScroll(scrollOffset);


    });


    function checkScroll(scrollOffset) {

        if( scrollOffset >= introH ) {
            header.addClass("header--fixed");

        } else {
            header.removeClass("header--fixed");
        }

    }

   /* Smooth Scroll */

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();


        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body"). animate({
            scrollTop: blockOffset
        }, 500);
    });


   /* Menu nav Toggle */

    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    	});


   /* Collapse */

   $("[data-collapse]").on("click", function(event){
       event.preventDefault();

       var $this = $(this),
       blockId = $this.data('collapse');


       $this.toggleClass("active");

   });

   /* Slider */

   $("[data-slider]").slick({

       infinite: true,
       fade: false,
       slidesToShow: 1,
       slidesToScroll: 1
   });






});
