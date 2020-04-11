$(function(){


    $('.weekly__slid').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<button class="slick-arrow slick-prev"><img src="../app/img/icons/chevron-left.png" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next"><img src="../app/img/icons/chevron-right.png" alt=""></button>',

    });

    $('.rate-star').rateYo({
        rating: 4.4,
        starWidth: "15px",
        readOnly: true
    });

    var mixer = mixitup('.release__product-wrapper');



});