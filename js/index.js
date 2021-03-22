window.onscroll = function () {

     myFunction();
     var a=document.querySelector(".content");
     a.style.cssText="margin-top: 130px;"
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    var a=document.querySelector('.content');
    if ( window.matchMedia("(min-width: 988px)").matches && window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } 
    else {
        navbar.classList.remove("sticky");
    }
}
let a,b;
function unsetSticky(){
    var change= document.getElementById("navbar");
    change.classList.remove("sticky");
}
function change(){ 
    console.log("fghjkl");
    if(window.matchMedia("(max-width: 988px)").matches){
        console.log("fghjkl");
        a = document.getElementById("search").style.cssText="display:none";
      /*  a.classList.remove("search__content");*/
      /*  a.classList.add("search__content__mob");*/
     document.querySelector(".search__content__mob").style.cssText="display:block;";
     window.onscroll = function(){unsetSticky()};
 }
}
function showText() {
   var a= document.querySelector('.catalog__container__mob__text__para');
   a.style.cssText="color:red";
    console.log('look');
    var b = document.querySelector('.hi');
    b.style.cssText="display:block";
}
change();
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    },
  pagination: {
   el: '.swiper-pagination',
   clickable: true,
   },
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
 });