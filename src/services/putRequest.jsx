export const putRequest = (url, body) => {
  return fetch(url, {
    method: 'PUT',
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};
