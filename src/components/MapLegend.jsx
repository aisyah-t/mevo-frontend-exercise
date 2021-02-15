const MapLegend = () => {
  return (
    <div className="legend-container" data-testid="map-legend">
      <div className="legend">
        <img src="https://assets.mevo.co.nz/vehicles/pin-vehicle-available.png" className="mevo-icon" alt="Mevo vehicle icon" />
        <span>Mevo vehicle</span>
      </div>
      <div className="legend" data-testid="home-zones-legend">
        <div className="home-zones" />
        <span>Home zones</span>
      </div>
    </div>
  );
};

export default MapLegend;