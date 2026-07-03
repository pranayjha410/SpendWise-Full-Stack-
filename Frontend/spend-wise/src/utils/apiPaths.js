export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_PATHS = {
  AUTH: {
    REGISTER: `${BASE_URL}/user/register`,
    LOGIN:    `${BASE_URL}/user/login`,
    LOGOUT:   `${BASE_URL}/user/logout`,
    GET_USER: `${BASE_URL}/user/me`, 
  },
  DASHBOARD: {
    GET: `${BASE_URL}/dashboard`,
  },
  INCOME: {
    ADD:             `${BASE_URL}/income/add`,
    GET_ALL:         `${BASE_URL}/income/get`,
    GET_ONE:         (id) => `${BASE_URL}/income/get/${id}`,
    UPDATE:          (id) => `${BASE_URL}/income/update/${id}`,  
    DELETE:          (id) => `${BASE_URL}/income/delete/${id}`, 
    DOWNLOAD_INCOME: `${BASE_URL}/income/downloadexcel`,
  },
  EXPENSE: {
    ADD:              `${BASE_URL}/expense/add`,                  // ✅ fixed
    GET_ALL:          `${BASE_URL}/expense/get`,                  // ✅ fixed
    GET_ONE:          (id) => `${BASE_URL}/expense/get/${id}`,
    UPDATE:           (id) => `${BASE_URL}/expense/update/${id}`,
    DELETE:           (id) => `${BASE_URL}/expense/delete/${id}`,
    DOWNLOAD_EXPENSE: `${BASE_URL}/expense/downloadexcel`,
  },
  IMAGE: {
    UPLOAD_IMAGE: `${BASE_URL}/user/upload-image`,
  },
};