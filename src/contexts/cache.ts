export const setFormCache = async (name: string, key: string, data: any) => {
  const cache = await caches.open(name);
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  const response = new Response(blob);
  await cache.put(new Request(key), response);
};
export const getFormCache = async (
  name: string,
  key: string,
  maxAgeSeconds: number = 60 * 60 * 24,
) => {
  const cache = await caches.open(name);
  const cachedResponse = await cache.match(new Request(key));
  if (!cachedResponse) return null;
  const dateHeader = cachedResponse.headers.get('date');
  const ageInSeconds = dateHeader
    ? (Date.now() - new Date(dateHeader).getTime()) / 1000
    : 0;
  if (ageInSeconds > maxAgeSeconds) {
    await cache.delete(new Request(key));
    return null;
  }
  const cacheData = await cachedResponse.json();
  return cacheData;
};
export const deleteCache = async (name: string, key: string) => {
  const cache = await caches.open(name);
  return cache.delete(key);
};
