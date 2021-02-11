import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import vehiclesLocations from "../utils/apis";

const Map = () => {

	mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

	const [longitude, setLongitude] = useState(174.8);
	const [latitude, setLatitude] = useState(-41.3);
	const [zoom, setZoom] = useState(11);

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
		map.addControl(new mapboxgl.NavigationControl(), "bottom-left");    
		// Add vehicle markers to maps on page load
		map.on("load", async () => {

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
		});

		map.on("move", () => {
			setLongitude(map.getCenter().lng.toFixed(4));
			setLatitude(map.getCenter().lat.toFixed(4));
			setZoom(map.getZoom().toFixed(2));  
		});

		return () => map.remove();

	}, []);

	return (   
		<>
			<div ref={mapContainer} className="map-container"/>
		</>
	);
};

export default Map;
