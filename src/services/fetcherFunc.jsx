export const fetcherFunc = (...args) =>
  fetch(...args).then((res) => res.json());
