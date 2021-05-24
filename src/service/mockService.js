const baseURL = 'https://test.api';
const headers = {
  'Content-type': 'application/json',
}

export const fakeRequest = () => fetch(`${baseURL}/pagar`, { headers })
  .then(response => response.json());
