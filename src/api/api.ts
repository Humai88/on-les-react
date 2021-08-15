type PageType = "language" | "math" | "craft" | "world";

export const getData = (page: PageType) => {
  return fetch("data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      return myJson[page];
    });
};
