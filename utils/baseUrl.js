const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://snap-solutions-backend.onrender.com"
    : "http://localhost:3000";

export default baseUrl;
