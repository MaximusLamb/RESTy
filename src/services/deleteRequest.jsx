export const deleteRequest = url => {
  return fetch(url, {
    method: 'DELETE' 
  })
    .then(res => res.json());
};
