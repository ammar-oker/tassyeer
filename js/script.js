//Glide posts carousel
var postGlide = new Glide('.post-glide', {
  autoplay: "3000",
  hoverpause: false,
  type: "carousel",
  direction: "rtl",
  perView: 3,
  gap: '40',
  breakpoints: {
    1230: {
      perView: 3
    },
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
});
postGlide.mount();

//Glide posts carousel
var glide = new Glide('.glide', {
  autoplay: "3000",
  hoverpause: false,
  type: "carousel",
  direction: "rtl",
  perView: 1,
  gap: '0'
});
glide.mount();



