import axios from 'axios';

export const carsInstance = axios.create();

export const getAllCars = async (page = 1, limit = 4) => {
  const url = new URL(
    'https://6648753e2bb946cf2fa0a2eb.mockapi.io/API/car'
  );
  url.searchParams.append('page', page);
  url.searchParams.append('limit', limit);
  const response = await carsInstance.get(url.href);

  return response;
};
