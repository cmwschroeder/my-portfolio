var pethubEl = $('#pethub');
var pethubImgEl = $('#pethub-image');

var weatherDashEl = $('#weather-dashboard');
var weatherDashImgEl = $('#weather-dashboard-image');

var artketplaceEl = $('#artketplace');
var artketplaceImgEl = $('#artketplace-image');

pethubEl.on("mouseover", function() {
    pethubImgEl.attr("src", "/gifs/pethub.gif");
});

pethubEl.on("mouseout", function() {
    pethubImgEl.attr("src", "/images/pethub.png")
});

weatherDashEl.on("mouseover", function() {
    weatherDashImgEl.attr("src", "/gifs/weather-dashboard.gif");
});

weatherDashEl.on("mouseout", function() {
    weatherDashImgEl.attr("src", "/images/weather-dashboard.png");
});

artketplaceEl.on("mouseover", function() {
    artketplaceImgEl.attr("src", "/gifs/artketplace.gif");
});

artketplaceEl.on("mouseout", function() {
    artketplaceImgEl.attr("src", "/images/artketplace.png");
});