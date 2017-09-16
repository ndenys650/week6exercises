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
	$('.hover').hover(function() {
		$('.hover').toggleClass("back");
	});
});
