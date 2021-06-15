
export const apiEndPoint =
  process.env.NODE_ENV === "production"
    ? "https://poketrader-2021.herokuapp.com/v1"
    : "http://localhost:3000/v1";
