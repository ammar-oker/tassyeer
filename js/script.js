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

document.querySelector('#phoneBtn1').addEventListener('click', function() {
  document.querySelector('#phoneBtn1').classList.add("active");
  document.querySelector('#phoneBtn2').classList.remove("active");
  document.querySelector('#phoneBtn3').classList.remove("active");
  document.querySelector('#phone1').classList.remove("hide");
  document.querySelector('#phone2').classList.add("hide");
  document.querySelector('#phone3').classList.add("hide");
})
document.querySelector('#phoneBtn2').addEventListener('click', function() {
  document.querySelector('#phoneBtn2').classList.add("active");
  document.querySelector('#phoneBtn1').classList.remove("active");
  document.querySelector('#phoneBtn3').classList.remove("active");
  document.querySelector('#phone2').classList.remove("hide");
  document.querySelector('#phone1').classList.add("hide");
  document.querySelector('#phone3').classList.add("hide");

})
document.querySelector('#phoneBtn3').addEventListener('click', function() {
  document.querySelector('#phoneBtn3').classList.add("active");
  document.querySelector('#phoneBtn1').classList.remove("active");
  document.querySelector('#phoneBtn2').classList.remove("active");
  document.querySelector('#phone3').classList.remove("hide");
  document.querySelector('#phone1').classList.add("hide");
  document.querySelector('#phone2').classList.add("hide");
})

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelector('#phone3').classList.add("hide");
    document.querySelector('#phone2').classList.add("hide");
    document.querySelector('.toggle-phones-btns').classList.remove('hide')

  }
}

var x = window.matchMedia("(max-width: 991px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
