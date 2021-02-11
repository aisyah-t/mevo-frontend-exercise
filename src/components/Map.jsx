import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";

import vehiclesLocations from "../utils/apis";
import Nav from "./Nav";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {

	const [longitude, setLongitude] = useState(174.8);
	const [latitude, setLatitude] = useState(-41.3);
	const [zoom, setZoom] = useState(11);

	const mapContainer = useRef(null);
	console.log(mapContainer);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [longitude, latitude],
			zoom: zoom
		});

		map.addControl(new mapboxgl.NavigationControl(), "bottom-left");    

		map.on("load", async () => {

			const vehiclesData = await vehiclesLocations();
			
			vehiclesData.forEach(vehicle => {
				const { iconUrl, position } = vehicle;

				const markerNode = document.createElement("div");
				ReactDOM.render(<img src={iconUrl} className="marker" alt="vehicle location marker" />, markerNode);
				
				new mapboxgl.Marker(markerNode)
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
			<Nav data-testid="nav-bar" />
			<div ref={mapContainer} className="map-container"/>
		</>
	);
};

export default Map;
