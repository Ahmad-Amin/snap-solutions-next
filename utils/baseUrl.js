const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://snapcreditportal.com"
    : "http://localhost:3001";

export default baseUrl;
