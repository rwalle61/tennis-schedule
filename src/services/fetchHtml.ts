import axios from 'axios';

const fetchHtml = async (url: string): Promise<string> => {
  const { data } = await axios.get<string>(url);
  return data;
};

export default fetchHtml;
