import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('Cant Load data');
  }
}

export const get5First = async () => {
  const response = await getAll();

  response.sort((a, b) => a.name.localeCompare(b.name));

  return response.slice(0, 5);
};

export const getRedGoods = async () => {
  const response = await getAll();

  return response.filter(item => item.color === 'red');
};
