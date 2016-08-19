$(function() {
	console.log('załadowany');
	var paragraphs = $('p'),
	names = $('.name'),
	sections = $('section'),
	bartek = $('h1.name');

	bartek.click(rozwin);
	function rozwin() {
		sections.slideToggle('slow');
	}
	function sayHello() {
		console.log('siema!');
	}
	paragraphs
	.first()
	.click(showAlert);

	function showAlert () {
		alert('Bartek');
	};
	$(document).keydown(showInfoAboutKey);
	function showInfoAboutKey ()
	{
		console.log('wcisnales w klawiature');
	}
	paragraphs.each(function () {
		$(this).mouseenter(changeFontSize)
		.mouseleave(RestoreFont);
	}) ;
	function changeFontSize(event) {
		defaultValue = event.target.style.fontSize;
		event.target.style.fontSize = '20px';
	}
	function RestoreFont(event) {
		event.target.style.fontSize = defaultValue;
	}
});