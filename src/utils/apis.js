export const vehiclesUrl = "https://api.mevo.co.nz/public/vehicles/all";

export const homeZonesUrl = "https://api.mevo.co.nz/public/home-zones/all";

export const getMevoPublicApi = async (url) => {
  try {
    const response = await fetch(url);
    const apiResponseData = await response.json();
    if (!apiResponseData) {
      throw new Error("Data doesn't seem to be valid");
    }
    return apiResponseData;
  } 
  catch (error) {
    console.error(error);
  }
};