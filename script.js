

// slick carousal function
$('.single-item').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  arrows:false,
  // mobileFirst:true,
  responsive: [
   
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
  // prevArrow:"<button type='button' class='slick-prev pull-left' style='border-radius:50%'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});  

$('.teacher-items').slick({
  slidesToShow: 3,
  slidesToScroll:2,
  arrows:false,
  dots:false,
  // mobileFirst:true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
}); 

$('.partner-item').slick({
  lazyLoad:'ondemand',
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows:false,
  // mobileFirst:true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
})


$('.count').counterUp({
  delay:10,
  time:3000
})


function openLightbox(imageSrc) {
  document.getElementById('lightboxImage').src = imageSrc;
  document.getElementById('lightbox').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling when lightbox is closed
}

/* scroll to top button start */  
myButton = document.getElementById("myBtn")
window.onscroll = function(){
scrollFunction()
}
function scrollFunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  myButton.style.display = "block"
}else{
  myButton.style.display = "none"
}
}

function topFunction(){
document.body.scrollTop = 0; //for safari
document.documentElement.scrollTop = 0 //for Chrome, Firefox, IE and Opera
}
/* scroll to top button end */

