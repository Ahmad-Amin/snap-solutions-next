const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://main--admirable-treacle-014e7f.netlify.app"
    : "http://localhost:3000";

export default baseUrl;
