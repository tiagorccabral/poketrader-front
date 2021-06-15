
export const apiEndPoint =
  process.env.NODE_ENV === "production"
    ? ""
    : "http://localhost:3000/v1";
