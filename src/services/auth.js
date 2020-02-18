const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: body && JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const getSignup = (email, password) => {
  return request('/api/v1/auth/signup', 'POST', { email, password });
};

export const getLogin = (email, password) => {
  return request('/api/v1/auth/login', 'POST', { email, password });
};

export const getVerify = () => {
  return request('/api/v1/auth/verify', 'GET');
}
;
