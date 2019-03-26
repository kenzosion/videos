import axios from 'axios';


const KEY = "AIzaSyDAstTm12AtobH8_FS14B_29NZycvBW7lw";

export default axios.create({
    baseURL:  'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

