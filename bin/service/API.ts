import axios from 'axios';

const client_id = "mAKKOvpN0MB3qfh9eF9vaenysK0jNHlaGFeG7pkCYas" 

export const fetchPhotoPage = (page:number) => {
  return axios
    .get<Array<any>>(
      `https://api.unsplash.com/photos/?client_id=${client_id}&page=${page}`,
    )
    .then(res => {
        return res.data
    });
};
