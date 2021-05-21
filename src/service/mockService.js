export const fakeRequest = (success, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ data: { result: 'OK' } });
      } else {
        reject({ message: 'Error' }) ;
      }
    }, timeout);
  });
}