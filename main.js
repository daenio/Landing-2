console.log('Hello World');
let burger=document.querySelector('.burger');
console.log(burger);
let menu=document.querySelector('.menu');
console.log(menu);
burger.addEventListener('click', function(){
    menu.classList.toggle('show');
    
});
let number=0;
for (number=0; number<=6; number=number+2) {
    console.log(number);
}