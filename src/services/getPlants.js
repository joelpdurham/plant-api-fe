const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
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
      console.log(res);
      return res.json();
    });
};

// export const getPlants = (search = '') => {
//   return request(`/api/v1/plants/${search}`, 'GET');
// };

export const getPlants = (search) => {
  return request(`/users/${search}`, 'GET');
}