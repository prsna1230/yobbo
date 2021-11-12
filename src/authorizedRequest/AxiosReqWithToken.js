import axios from "axios";

function getAxiosWithTokenObj() {
  // get token
  let token = localStorage.getItem("token");
  // add token to headers of req object
  let apiURL = "http://localhost:8765";
  let axiosRequestWithToken = axios.create({
    baseURL: apiURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return axiosRequestWithToken;
}

export default getAxiosWithTokenObj;
