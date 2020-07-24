export const getRequest = url => {
  return fetch(url)
    .then(res => res.json());
};
