import { useState, useRef } from "react"
import mapboxgl from 'mapbox-gl'
import { useMount } from 'react-use';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWlzeWFoLXQiLCJhIjoiY2treW44eXV5MDhsODJudDQ0azdjY3ZhcSJ9.3IV3SsLAFV_YWoAEcj1ShQ';

const Map = () => {

  const [longitude, setLongitude] = useState(174.8)
  const [latitude, setLatitude] = useState(-41.25)
  const [zoom, setZoom] = useState(10)

  const mapContainer = useRef(null)

  useMount(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom
    })

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');    

    map.on('move', () => {
      setLongitude(map.getCenter().lng.toFixed(4))
      setLatitude(map.getCenter().lat.toFixed(4))
      setZoom(map.getZoom().toFixed(2));  
    });
  })

  return (
    <>
    <div className="App">
      <img src="https://assets.mevo.co.nz/brand/logo-dark.svg" alt="mevo company logo" width="200px" height="100px" />
      <h3>Vehicles Location</h3>
      <h3>Home Zones</h3>
      <h3>Find A Car</h3>
    </div>
    
      <div ref={mapContainer} className="mapContainer"/>
    </>
  );
}

export default Map;
