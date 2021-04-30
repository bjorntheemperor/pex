const btn = document.querySelector(".nav__item_burger");
const hidden = document.querySelector(".hidden-nav");
const header = document.querySelector(".header");
const close = document.querySelector(".nav__item_close");
const search = document.querySelector(".fa-search")
const input = document.querySelector(".header__input")
let nav = document.querySelectorAll(".nav__item");




// Functions to interact with hidden menu

btn.addEventListener("click", function(){
  btn.style.display = "none";
  close.style.display = "block";
  hidden.style.top = "0";
  if (window.window.pageYOffset > 0) {
    close.style.color = "white";
    input.style.border = "none";
  }
})
close.addEventListener("click", function(){
  btn.style.display = "block";
  close.style.display = "none";
  hidden.style.top = "-200vh";
})


// Here is a function that kills bugs that are caused
// by changing width of the screen
window.addEventListener("resize", resize);
function resize() {

// Burger and close buttons resize interactions
  if(hidden.style.top = "0"){
    hidden.style.top = "-200vh";
    close.style.display = "none";
    btn.style.display = "block";
  }
  if(window.outerWidth > 895){
    btn.style.display = "none";
    close.style.display = "none";
  }

  // Input resize interactions
  if(window.outerWidth > 1024){
    search.addEventListener("mouseenter", function() {
    input.style.width = "210px";
    })
    input.addEventListener("mouseleave", function() {
    input.style.width = "210px";
  })
    input.style.width = "210px";
  } else {
    input.addEventListener("mouseleave", function() {
    input.style.width = "20px";
  })
    input.style.width = "20px";
}
}
// Input hover interactions
if(window.outerWidth <=1024){
  search.addEventListener("mouseenter", function() {
  input.style.width = "210px";
})
  search.addEventListener("onclick", function() {
  input.style.width = "210px";
})

  input.addEventListener("mouseleave", function() {
  input.style.width = "20px";
  search.style.marginLeft = "0px"
})
}
if(window.outerWidth > 1024) {
  search.addEventListener("mouseenter", function() {
  input.style.width = "210px";
  })
  input.addEventListener("mouseleave", function() {
  input.style.width = "210px";
})
}


// Height&Scroll interactions
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    header.style.position = "fixed";
    if (window.pageYOffset > 50) {
      header.style.padding = "10px 0";
      for (var i = 0; i < 5; i++) {
        nav[i].classList.remove("nav__item");
        nav[i].classList.add("black__item");
      }
    }
  }
  else {
    for (var i = 0; i < 5; i++) {
      nav[i].classList.remove("black__item");
      nav[i].classList.add("nav__item");
    }
    header.style.padding = "30px 0";
    header.style.position = "absolute";
  }
  if (window.pageYOffset > 0) {
    header.style.backgroundColor = "#fff";
    header.style.opacity = "0.95";
    document.querySelector(".nav").style.color = "black";
    input.style.border = "1px solid black";
  }
  else {
    header.style.backgroundColor = "transparent";
    header.style.opacity = "1"
    document.querySelector(".nav").style.color = "inherit";
    input.style.border = "none";
  }
});
