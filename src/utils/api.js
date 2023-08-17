import axios from "axios";


const BASE_URL = 'http://api.themoviedb.org/3';


const TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTIxODQwN2M4Y2Y3Mjg2NTBhYTBkOWEwY2IwMzdiYSIsInN1YiI6IjY0Y2U3YTBiNTQ5ZGRhMDBhY2YwMDczOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UPieHpKZb-XONlfI3FZ--DmF-Hwe-Kqi6fxogWGRv0Q"

const headers = {
    Authorization : 'Bearer ' + TMBD_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data
    } catch (error) {
        console.log(error);
        return error
    }
}