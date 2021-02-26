mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja3dmajEyMyIsImEiOiJja2pvbDEzZnMwNjJuMnNsc29qcTZjejNiIn0.LeeJOa0_8yBnP8Uotf5z5g';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-94.7043066559794, 38.97060813429256], // starting position [lng, lat]
    zoom: 14 // starting zoom
});

var marker = new mapboxgl.Marker()
    .setLngLat([-94.7043066559794, 38.97060813429256])
    .addTo(map);
