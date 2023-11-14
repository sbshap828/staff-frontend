import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://my-api-staff-project-ef413adaef92.herokuapp.com",
  development: "https://my-api-staff-project-ef413adaef92.herokuapp.com/api/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;