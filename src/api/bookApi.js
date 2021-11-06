import axiosClient from "./axiosClient";

const bookApi ={
    getList: (data) => {
        const url = data;
        return axiosClient.get(url);
    }
}

export default bookApi;