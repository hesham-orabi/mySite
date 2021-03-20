'use strict';

$(".nav-link").click(function () {
  $("html,body").animate({
    scrollTop: $("#" + $(this).data("value")).offset().top
  }, 1910);
});
var switchButton = document.getElementById('switch-button');
var switchStyle = document.getElementById('switch-style');
var hideColors = document.getElementById('close');
switchButton.addEventListener('click', function () {
  switchButton.style.display = 'none';
  switchStyle.style.display = 'block';
});
hideColors.addEventListener('click', function () {
  switchStyle.style.display = 'none';
  switchButton.style.display = 'block';
}); // color Switch

var yellow = document.getElementById('yellow');
var gold = document.getElementById('gold');
var orange = document.getElementById('orange');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var red = document.getElementById('red');
var rose = document.getElementById('rose');
var purble = document.getElementById('purble');
var styleSheet = document.getElementsByTagName("LINK")[8];
yellow.addEventListener('click', function () {
  styleSheet.setAttribute("href", "layout/css/changeColorTheme/yellow-color.css");
});
gold.addEventListener('click', function () {
  styleSheet.setAttribute("href", "layout/css/changeColorTheme/gold-color.css");
});
orange.addEventListener('click', function () {
  styleSheet.setAttribute("href", "layout/css/changeColorTheme/orange-color.css");
});
green.addEventListener('click', function () {
  styleSheet.setAttribute("href", "layout/css/changeColorTheme/green-color.css");
});
blue.addEventListener('click', function () {
  styleSheet.setAttribute("href", "layout/css/changeColorTheme/blue-color.css");
});
red.addEventListener('click', function () {
  styleSheet.setAttribute("href", "layout/css/changeColorTheme/red-color.css");
});
rose.addEventListener('click', function () {
  styleSheet.setAttribute("href", "layout/css/changeColorTheme/rose-color.css");
});
purble.addEventListener('click', function () {
  styleSheet.setAttribute("href", "layout/css/changeColorTheme/purble-color.css");
});
//# sourceMappingURL=myScript.dev.js.map
