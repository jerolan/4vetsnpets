import { useState, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  data: undefined,
  loading: true,
  error: undefined,
};

export function useAxios(props:any) {
  const [requestData, updateData] = useState(initialState);
  useEffect(() => {
    axios
      .get(`https://vets-api-lara-vel-dev.vercel.app/api/${props.endpoint}`)
      .then(response => {
        console.log(response.data);
        updateData({
          data: response.data,
          loading: false,
          error: undefined,
        });
      })
      .catch(error => {
        updateData({
          data: undefined,
          loading: false,
          error: error.message,
        })
      })
  }, []);

  return requestData
}

