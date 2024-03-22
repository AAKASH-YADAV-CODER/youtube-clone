import axios from "axios";

const BASE_URL = " https://www.googleapis.com/youtube/v3";
const YOUTUBE_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;

//This is initial Call for getting all king of data
export const fetchDataFromApi = async () => {
    try {
        const data = await axios.get(`${YOUTUBE_VIDEO_URL}`);
        return data;
    } catch (err) {
        console.log(err)
    }
};
//This API calling when tag button is clicked we set that tag button into &q=
export const fetchDataFromTagButton = async (activeButton) => {
    try {
        const data=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${activeButton}&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
        return data;
    } catch (err) {
        console.error(err)
    }
}

//This API Call For Single Video to play and the videoID we get from useSearchParams('v') 
export const fetchSingleVideo = async (videoId) => {
    try {
        const data = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
        return data;
    } catch (err) {
        console.error(err)
    }
}