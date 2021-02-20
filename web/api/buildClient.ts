import axios from 'axios';

export const buildClient = ({ req }: { req?: { headers: object } }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: '',
    });
  }
};
