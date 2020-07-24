export const postRequest = (url, body) => {
  return fetch(url, {
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};
