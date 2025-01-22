import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://as-travel-agency-server.vercel.app'
})


const usePublicAxios = () => {
    return axiosPublic;
};

export default usePublicAxios;
