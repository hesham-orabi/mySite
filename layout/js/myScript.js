'use strict';

$(".nav-link").click(function(){
    $("html,body").animate({scrollTop:$("#"+$(this).data("value")).offset().top},1910)
});

let switchButton = document.getElementById('switch-button');
let switchStyle  = document.getElementById('switch-style');
let hideColors   = document.getElementById('close');

switchButton.addEventListener('click' , () =>{
    switchButton.style.display='none';
    switchStyle.style.display= 'block';
})
hideColors.addEventListener('click' , () =>{
    switchStyle.style.display= 'none';
    switchButton.style.display='block';

})

// color Switch
let yellow = document.getElementById('yellow');
let gold = document.getElementById('gold');
let orange = document.getElementById('orange');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let red = document.getElementById('red');
let rose = document.getElementById('rose');
let purble = document.getElementById('purble');

let styleSheet = document.getElementsByTagName("LINK")[8];


yellow.addEventListener('click' , () =>{
    styleSheet.setAttribute("href", "layout/css/changeColorTheme/yellow-color.css"); 
});

gold.addEventListener('click' , () =>{
    styleSheet.setAttribute("href", "layout/css/changeColorTheme/gold-color.css"); 
});

orange.addEventListener('click' , () =>{
    styleSheet.setAttribute("href", "layout/css/changeColorTheme/orange-color.css");
});

green.addEventListener('click' , () =>{
    styleSheet.setAttribute("href", "layout/css/changeColorTheme/green-color.css");
});

blue.addEventListener('click' , () =>{
    styleSheet.setAttribute("href", "layout/css/changeColorTheme/blue-color.css");
});

red.addEventListener('click' , () =>{
    styleSheet.setAttribute("href", "layout/css/changeColorTheme/red-color.css");
});

rose.addEventListener('click' , () =>{
    styleSheet.setAttribute("href", "layout/css/changeColorTheme/rose-color.css");
});

purble.addEventListener('click' , () =>{
    styleSheet.setAttribute("href", "layout/css/changeColorTheme/purble-color.css");
});



