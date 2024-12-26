import axios from "axios";

const instance = axios.create({
  baseURL: "https://bitebuddy-lovat.vercel.app",
});
const useAxios = () => {
  return instance;
};

export default useAxios;
