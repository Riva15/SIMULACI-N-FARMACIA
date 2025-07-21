const API_URL = "http://localhost:3000/api/auth";
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export async function register(data) {
  const resp = await API.post('/auth/register', data);
  return resp.data;
}

export async function login(data) {
  const resp = await API.post('/auth/login', data);
  return resp.data;
}

export function setToken(token) {
  localStorage.setItem('sifhos_token', token);
}

export function getToken() {
  return localStorage.getItem('sifhos_token');
}
