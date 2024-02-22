import axios from "axios";

const backend = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8888",
});

export default backend;
