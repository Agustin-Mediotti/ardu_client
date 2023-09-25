const baseUrl = "http://192.168.0.127:8080/api/weather";

const getAll = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
};

export default { getAll };
