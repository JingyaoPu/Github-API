import { 
    loginSuccess,
    setFetching,
    fetchFailed,
    fetchSuccessed
 } from "./actions"
import axios from 'axios';
import { connect } from 'react-redux'
import { selectAll } from '../redux/selectors'
import { dispatch } from 'react-redux'
const apiUrl = 'https://api.github.com';
// axios.interceptors.request.use(
//     config => {
//         const { origin } = new URL(config.url);
//         const allowedOrigins = [apiUrl];
//         const token = localStorage.getItem('auth_token');
//         if (allowedOrigins.includes(origin)) {
//             config.headers.authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

function getUser(user) {
    return axios.get(`${apiUrl}/users/${user}`);
}

export function getfollowing(user,pageIndex,pageSize){
    //https://api.github.com/users/${USERNAME}/following?page=${pageIndex}&per_page=${pageSize}’
    return axios.get(`${apiUrl}/users/${user}/following?page=${pageIndex}&per_page=${pageSize}`);
}


export const search = (user) => {
    console.log("search")
    return dispatch => {
        dispatch(setFetching(true))
        return getUser(user)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(fetchSuccessed(res.data))
                }   
                },
                (error) => {
                    console.log(error);
                    console.log("effect fail")
                    dispatch(fetchFailed(`${user} not found`))
                },
            )
            .catch(
                err => console.log(err)
            );
    };
}






