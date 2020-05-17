
$(document).ready(function(){
	$(".nav li > a").click(function(){
		$(".nav li > a").removeAttr("class");
		$(this).addClass("home")
	});
$(".nav li a").click(function(){
	var e=$(this.hash);$("body,html").animate({scrollTop:e.offset().top},700);
	return false});
$(window).scroll(function(){if($(this).scrollTop()>500){
	$(".top").fadeIn()}else{$(".top").fadeOut()}});
$(".top").click(function(){$("body,html").animate({scrollTop:0},500);
	return false})})
          
/*
	* Design by : Mahmoud Abd Alkarim ^_^
	* Twitter   : 3abkream 
	* Contact   : AbdAlkarim.mail@gmail.com
*/

// var addEvent = function(obj, type, callback, eventReturn)
// {
//     if(obj == null || typeof obj === 'undefined')
//         return;

//     if(obj.addEventListener)
//         obj.addEventListener(type, callback, eventReturn ? true : false);
//     else if(obj.attachEvent)
//         obj.attachEvent("on" + type, callback);
//     else
//         obj["on" + type] = callback;
// };
// var watch = function(evt)
// {
//     /*
//         Older browser versions may return evt.srcElement
//         Newer browser versions should return evt.currentTarget
//     */
//     var dimensions = {
//         height: (evt.srcElement || evt.currentTarget).innerHeight,
//         width: (evt.srcElement || evt.currentTarget).innerWidth
//     };
// };

// addEvent(window, 'resize', watch, true)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
