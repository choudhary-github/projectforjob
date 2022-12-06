let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
let s3 = document.querySelector(".s3");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");

function f1(){
  s1.classList.remove("active");
  s2.classList.add("active");
}
function f2(){
  s2.classList.remove("active");
  s3.classList.add("active");
}
function f3(){
  s3.classList.remove("active");
  one.classList.add("active")
  setTimeout(()=>{
    one.classList.remove("active");
    two.classList.add("active");
  },1500);
  setTimeout(() => {
    two.classList.remove("active");
    three.classList.add("active");
  }, 2500);
  setTimeout(() => {
    three.classList.remove("active");
    four.classList.add("active");
  }, 3500);
}