import axios from "axios";

const BASE_URL = " https://www.googleapis.com/youtube/v3";
const YOUTUBE_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;

export const fetchDataFromApi = async () => {
    try {
        const data = await axios.get(`${YOUTUBE_VIDEO_URL}`);
        return data;
    } catch (err) {
        console.log(err)
    }
};

export const fetchDataFromTagButton = async (activeButton) => {
    try {
        const data=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${activeButton}&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
        return data;
    } catch (err) {
        console.error(err)
    }
}