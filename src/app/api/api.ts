import { API_CONFIG } from './config';
import { Productt } from './types';

async function fetchData<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/${endpoint}`, {
      method: 'GET',
      headers: API_CONFIG.HEADERS,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.data.search.products as T; // Usamos un tipo genérico para flexibilidad
  } catch (error) {
    console.error('Fetch Error:', error);
    return null;
  }
}

export async function fetchProducts(): Promise<Productt[] | null> {
  return fetchData<Productt[]>(
    'products/v2/list?store_id=911&category=5xtg6&count=20&offset=0&default_purchasability_filter=true&sort_by=relevance'
  );
}
