const button_prev = document.getElementById('prev');
const button_next = document.getElementById('next');
const slider = document.getElementById('slider');
const slider_info = document.getElementById('slider-info');

// Photo by Asad Photo Maldives from Pexels
var slider_data = [
	{
		filename: 'pexels-asad-photo-maldives-1268871',
		reference: 'Photo by Asad Photo Maldives from Pexels',
	},
	{
		filename: 'pexels-andrea-piacquadio-3770883',
		reference: 'Photo by Andrea Piacquadio from Pexels',
	},
];

var i = 0;
var timer;

function loadSlider() {
	slider.style.backgroundImage = `url('assets/images/slider/${slider_data[i].filename}.jpg')`;
	slider_info.innerHTML = `
	<p>${slider_data[i].reference}</p>
	`;
	i < slider_data.length - 1 ? i++ : (i = 0);
	timer = setTimeout('loadSlider()', 5000);
}

// slider Control Event Listerner
button_prev.addEventListener('click', function () {
	i == 0 ? (i = slider_data.length - 1) : (i = i - 1);
	i <= 0 ? (i = slider_data.length - 1) : (i = i - 1);
	clearTimeout(timer);
	loadSlider();
});
button_next.addEventListener('click', function () {
	i = i - 1;
	i == slider_data.length - 1 ? (i = 0) : i++;
	clearTimeout(timer);
	loadSlider();
});

window.onload = loadSlider();
