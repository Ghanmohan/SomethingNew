function initMap() {
    const kaithal = { lat: 29.785716, lng: 76.396373 };
    var map = new google.maps.Map(document.getElementById("map"), { zoom: 4, center: kaithal });
    const marker = new google.maps.Marker({
        position: kaithal,
        map: map,
    });
}


// to add new marker -not working
var marker;
google.maps.event.addListener(map, 'click', function (event) {
    placeMarker(event.latLng);
});
function placeMarker(location) {
    if (marker == null) {
        marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }
    else {
        marker.setPosition(location);
    }
}
