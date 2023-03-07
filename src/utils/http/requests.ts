import axios from 'axios';
import { BaseResponse } from './response';
export const BASEDOMAIN = 'https://ttvnapi.com';
// const BASEDOMAIN = '192.168.1.35:8080';

export const apiGet = async (url: string, header: any) => {
  try {
    url = BASEDOMAIN + url;
    const { data } = await axios.get(url, { headers: header });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error:', error.message);
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
    url = BASEDOMAIN + url;
    const { data } = await axios.post<BaseResponse>(url, payload, {
      headers: header,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error:', error.message);
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
