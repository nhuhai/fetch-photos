import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID z9HH5nSxT6fCvO-G5qHy1WngafDYBG_GvcpG-pHCAPg'
  }
});