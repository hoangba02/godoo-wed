import axios from 'axios';
import { BaseResponse } from './response';

const baseDomain = 'https://ttvnapi.com';
// const baseDomain = "http://127.0.0.1:8080";

export const apiGet = async (url: string, header: any) => {
  try {
    url = baseDomain + url;
    const { data } = await axios.get(url, { headers: header });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error: ', error.message);
    } else {
      console.log('error: ', 'undefined');
    }
    const response: BaseResponse = {
      data: undefined,
      error: 1,
      message: 'system_error',
    };
    return response;
  }
};

export const apiPost = async (url: string, payload: any, header: any) => {
  try {
    url = baseDomain + url;
    const { data } = await axios.post<BaseResponse>(url, payload, {
      headers: header,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error: ', error.message);
    } else {
      console.log('error: ', 'undefined');
    }
    const response: BaseResponse = {
      data: undefined,
      error: 1,
      message: 'system_error',
    };
    return response;
  }
};
