const API_URL = 'https://mate-academy.github.io/react_phone-catalog/api';

export async function getData<T>(url: string): Promise<T[]> {
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

export async function getGoods() {
  const phones = await getData<Good>(`${API_URL}/products.json`);

  return phones;
}

export async function getGoodDetail(id: string) {
  const phones = await getData<GoodDetail>(`${API_URL}/${id}.json`);

  return phones;
}
