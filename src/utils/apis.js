export const vehiclesLocations = async () => {
  const response = await fetch("https://api.mevo.co.nz/public/vehicles/all");
  const coordinates = await response.json();
  return coordinates;
  // Need to add error handling using try catch
};

export const homeZones = async () => {
  const homeZonesData = await fetch("https://api.mevo.co.nz/public/home-zones/all");
  const homeZones = await homeZonesData.json();
  return homeZones;
  // Need to add error handling using try catch
};