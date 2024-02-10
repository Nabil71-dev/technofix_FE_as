import api from '../api/api'

//Get all users
export const getUsers = async (page) => {
    const response = await api?.get(`/users?limit=${page * 30}`);
    return response;
};