let lat = 47.6062;
let lon = -122.3321;

const location = "Seattle";

var fetchUrl = require("fetch").fetchUrl;

// source file is iso-8859-15 but it is converted to utf-8 automatically
fetchUrl(
    `https://airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=${lat}&longitude=${lon}&distance=25&API_KEY=CB278A15-984D-44A7-A2DE-AA530CDDFD69`,
    function(error, meta, body){
        console.log(JSON.parse(body)[0].AQI);
    }
);

placeToCoordinates(location);

function placeToCoordinates(location) {
    fetchUrl(
        `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=9bdca107dee44c8d90c4efabb9b500e4`,
        function(error, meta, body){
            console.log(JSON.parse(body).results[0].geometry);
        }
    );
}
