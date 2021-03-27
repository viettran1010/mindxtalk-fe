export const login = async (username: string, password: string) => {
  const res = await fetch('https://mindxtalk-api.herokuapp.com/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};
// eslint-disable-next-line
export default { login };
