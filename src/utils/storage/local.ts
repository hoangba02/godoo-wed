export const getLocalStorage = key => {
  const data = localStorage.getItem(key);
  if (data) {
    const result = JSON.parse(data);
    return JSON.parse(result.auth);
  } else {
    return null;
  }
};
