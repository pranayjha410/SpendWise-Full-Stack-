export const BASE_URL = "http://localhost:8000/api/v1";

export const API_PATHS = {
  AUTH: {
    REGISTER: `${BASE_URL}/user/register`,
    LOGIN:    `${BASE_URL}/user/login`,
    LOGOUT:   `${BASE_URL}/user/logout`,
  },
  DASHBOARD: {
    GET: `${BASE_URL}/dashboard`,
  },
  INCOME: {
    ADD:             `${BASE_URL}/income/add`,
    GET_ALL:         `${BASE_URL}/income/get`,
    GET_ONE:         (id) => `${BASE_URL}/income/get/${id}`,
    UPDATE:          (id) => `${BASE_URL}/income/update/${id}`,  // ✅ fixed
    DELETE:          (id) => `${BASE_URL}/income/delete/${id}`,  // ✅ fixed
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