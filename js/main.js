$(document).ready(function() {
	// when you click the class image-appear button, bring the image into display
	$('.image-appear').click(function() {
		$('#image').slideDown(100);
	});
	// when you click the class image-disappear button, take the image out of display
	$('.image-disappear').click(function() {
		$('#image').slideUp(100);
	});
	// when you click the div with class title, change the background color to red
	$('.background').click(function() {
		$('.title').css("background-color", "red");
	});
	// when you double click the div with class title, change the background color to blue
	$('.background').dblclick(function() {
		$('.title').css("background-color", "blue");
	});
	// when you click the add to list button, the content in the input will be appended to the ul
	$('.add-content').click(function() {
		$('.list').append("<li>" + $(".content").val() + "</li>");
	});
	// when you hover over the word helloooooo, the background color will toggle/change to green
	$('.hover').hover(function() {
		$('.hover').toggleClass("back");
	});
	// when you hover the phrase with class pup, itll slide up and away
	$('.pup').hover(function() {
		$('.pup').slideUp();
	});
	// when you click the goodbye button the word fades out
	$('.fade').click(function() {
		$('.bye').fadeOut();
	});
	$('.font-change').hover(function() {
		$('.font-change').toggleClass("font");
	});
});
