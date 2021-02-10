const vehiclesLocations = async () => {
	const response = await fetch("https://api.mevo.co.nz/public/vehicles/all");
	const coordinates = await response.json();
	return coordinates;
};

export default vehiclesLocations;