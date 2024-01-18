const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://snapcreditsolutions.com"
    : "http://localhost:3001";

export default baseUrl;
