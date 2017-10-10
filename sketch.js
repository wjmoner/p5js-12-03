var cities;

function preload() {
	cities = loadTable("cities.csv", "header");
}

function setup() {
	createCanvas(960, 540);
	fill(255, 150);
	noStroke();
}

function draw() {
	background(0);
	push();
	// var xoffset = map(mouseX, 0, width, -width*3, -width);
	// translate(xoffset, -600);
	scale(2.5);
	for (var i = 0; i < cities.getRowCount(); i++) {
		var latitude = cities.getNum(i, "lat");
		var longitude = cities.getNum(i, "lng");
		setXY(latitude, longitude);
	}
	pop();
}

function setXY(lat, lng) {
	var x = map(lng, -180, 180, 0, width);
	var y = map(lat, 90, -90, 0, height);
	ellipse(x, y, 0.25, 0.25);
}