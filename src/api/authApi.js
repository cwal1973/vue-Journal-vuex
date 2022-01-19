import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyBB04qBIdmmqNVw4sz2VL2JXT8Cwho6IZk'
    }


})

export default authApi
   