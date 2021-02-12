import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import { vehiclesLocations, homeZones } from "../utils/apis";
import MapLegend from "./MapLegend";

const Map = () => {

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  // Store original coordinates for Wellington and zoom on the map
  const [longitude, setLongitude] = useState(174.8);
  const [latitude, setLatitude] = useState(-41.3);
  const [zoom, setZoom] = useState(11.5);

  const mapContainer = useRef(null);

  useEffect(() => {
    // Initialise map on page
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: zoom
    });
    // Add zoom in and out control to map
    map.addControl(new mapboxgl.NavigationControl(), "top-right");    
		
    map.on("load", async () => {

      // Add vehicle markers to map on load
      const vehiclesData = await vehiclesLocations();
		
      vehiclesData.forEach(vehicle => {
        const { iconUrl, position } = vehicle;

        // Create image DOM element for Mevo vehicle marker
        const vehicleMarkerNode = document.createElement("img");
        vehicleMarkerNode.className = "marker";
        vehicleMarkerNode.src = iconUrl;
			
        new mapboxgl.Marker(vehicleMarkerNode)
          .setLngLat([position.longitude, position.latitude])
          .addTo(map);
      });

      // Add home zones to map on load
      const homeZonesData = await homeZones();

      map.addSource("homezones", homeZonesData);

      map.addLayer({
        "id": "homezones",
        "type": "line",
        "source": "homezones",
        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#f7590d",
          "line-width": 2
        }
      });
    });
    // Reset coordinates and zoom at the centre of the map when user moves the map
    map.on("move", () => {
      setLongitude(map.getCenter().lng.toFixed(4));
      setLatitude(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));  
    });

    return () => map.remove();

  }, []);

  return (   
    <main className="main-container">
      <div ref={mapContainer} className="map-container"/>
      <MapLegend />
    </main>
  );
};

export default Map;