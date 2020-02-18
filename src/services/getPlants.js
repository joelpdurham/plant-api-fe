const request = (path, method, body) => {
  return fetch(`http://localhost:7890${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: body && JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res]))
    .then(([ok, res]) => {
      if(!ok) throw res;
      return res.json();
    });
};

export const getPlants = (search) => {
  if(!search) return request('/api/v1/plants/', 'GET');
  return request(`/api/v1/plants/?commonName=${search}`, 'GET');
};
