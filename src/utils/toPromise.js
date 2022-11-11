export const toPromise = (promise) => {
    return promise
        .then((data) => [data, null])
        .catch((err) => [null, err]);
  }
  