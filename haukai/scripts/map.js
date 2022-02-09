 // Initialize and add the map
  function initMap() {
    
    var haukai = {lat: -35.218147, lng: 173.957414};
  
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: haukai,
      disableDefaultUI: true,
    });

    var marker = new google.maps.Marker({
        position: haukai,
        map: map, 

    });

    var infowindow = new google.maps.InfoWindow({
        content:"The Haukai"
      });
      
      infowindow.open(map,marker);

  }

