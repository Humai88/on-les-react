export const getData = () => {
  return fetch("http://localhost:3000/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

// "http://localhost:3000/data.json"
// "https://www.on-les.com/data.json"
