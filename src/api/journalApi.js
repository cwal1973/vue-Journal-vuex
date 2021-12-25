import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-journal-ea03a-default-rtdb.firebaseio.com'
})

export default journalApi
   