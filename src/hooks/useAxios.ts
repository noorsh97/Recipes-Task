import { useState, useEffect } from 'react';
import axios from 'axios';
import { BaseUrl, API_KEY } from 'src/constants';

type IProps = {
  url: string
}
export function useAxios<T>({ url }: IProps) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        axios.defaults.headers["x-api-key"] = API_KEY;
        const response = await axios.get(`${BaseUrl}${url}`);
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useAxios;


