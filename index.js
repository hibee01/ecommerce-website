$(document).ready(function(){

    $(window).scroll(function(){
        if(window.scrollY > 700) {
            $('.nav-home').addClass("sticky");
        } else {
            $('.nav-home').removeClass("sticky")
        }


    })

    $(".small-img").click(function(){
        $(".main-img").attr("src", this.src);
        
    })

    // $(".product-details-col-2 .hero-btn").click(function(){
    //     $(".product-details-col-2 .hero-btn").html("Added to Cart");
    // })

    // $(".sidebarbtn").click(function(){
    //     $(".sidebar").toggleClass("active")
    //     $(".sidebarbtn").toggleClass("toggle")
    // })

    $(".product-details-col-2 .hero-btn").click(function(e){
        e.preventDefault;
       if($(this).text() === 'Add To Cart') {
           $(this).text('Added')
           $(this).css('backgroundColor', 'green')
       } else {$(this).text('Add To Cart')
       $(this).css('backgroundColor', '#ff523b')}
    })

    $('.long-sleeve').click(function(){
        document.location.href = '/product-details.html'
    })

    $(".menu-btn").click(function(){
        $(".menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    })

    
})