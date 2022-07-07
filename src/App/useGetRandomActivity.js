import { useState } from "react";
import axios from "axios";

const API_KEY = 'yhhmhe+B+3eYDa5FgJE9vA==OndsxCIAmDXXfqFb';

const api = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/bucketlist',
    headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY,
    },
});

// const RANDOM_URL = "http://www.boredapi.com/api/activity/";


const useGetRandomActivity = () => {
    const [ randomActivity, setRandomActivity ] = useState();
    const [loading, setLoading ] = useState(false);

    const getRandomActivity = async () => {
        const response = await api();
        console.log(response.data)
        setRandomActivity(response.data);
        setLoading(false);
    }

    return {randomActivity, getRandomActivity, loading, setLoading}
}

export { useGetRandomActivity };