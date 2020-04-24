import axios from 'axios';
import { format } from 'date-fns';

import { inputDateFormat } from './constants';
import { API } from './config';

const parseList = res => {
  if (res.status !== 200) throw new Error(res.message);

  const list = res.data;
  if (!list || typeof list !== 'object') return [];

  return list;
};

export const getHeroes = async () => {
  try {
    const res = await axios.get(`${API}/heroes.json`);
    const data = parseList(res);
    const heroes = data.map(h => {
      h.originDate = format(h.originDate, inputDateFormat);
      return h;
    });

    return heroes;
  } catch (e) {
    console.error(e);
    return [];
  }
};
