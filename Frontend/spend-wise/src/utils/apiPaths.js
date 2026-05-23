 export const BASE_URL = "http://localhost:8000/api/v1";

export const API_PATHS = {
  AUTH: {
    REGISTER: `${BASE_URL}/auth/register`,
    LOGIN: `${BASE_URL}/auth/login`,
    LOGOUT: `${BASE_URL}/auth/logout`,
  },
  DASHBOARD: {
    GET: `${BASE_URL}/dashboard`,
  },
  INCOME: {
    ADD: `${BASE_URL}/income/add`,
    GET_ALL: `${BASE_URL}/income/get`,
    GET_ONE: (incomeid) => `${BASE_URL}/income/get/${incomeid}`,
    UPDATE: (incomeid) => `${BASE_URL}/income/get/${incomeid}`,
    DELETE: (incomeid) => `${BASE_URL}/income/get/${incomeid}`,
    DOWNLOAD_INCOME: `${BASE_URL}/income/downloadexcel`,
  },
  EXPENSE: {
    ADD: `${BASE_URL}/income/add`,
    GET_ALL: `${BASE_URL}/income/get`,
    GET_ONE: (expenseid) => `${BASE_URL}/expense/get/${expenseid}`,
    UPDATE: (expenseid) => `${BASE_URL}/expense/get/${expenseid}`,
    DELETE: (expenseid) => `${BASE_URL}/expense/get/${expenseid}`,
    DOWNLOAD_EXPENSE: `${BASE_URL}/expense/downloadexcel`,
  },
  
  IMAGE:{
    UPLOAD_IMAGE: `${BASE_URL}/auth/upload-image`
  }

};
