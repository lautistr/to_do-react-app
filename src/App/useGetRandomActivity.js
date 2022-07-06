import { useState } from "react";
import axios from "axios";

const RANDOM_URL = "http://www.boredapi.com/api/activity/";


const useGetRandomActivity = () => {
    const [ randomActivity, setRandomActivity ] = useState();


    const getRandomActivity = async () => {
        const response = await axios(RANDOM_URL);
        setRandomActivity(response.data);
    }

    return {randomActivity, getRandomActivity}
}

export { useGetRandomActivity };