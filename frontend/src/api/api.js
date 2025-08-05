import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Signup user
export const signup = (formData) => API.post('/auth/signup', formData);

// Login user
export const login = (formData) => API.post('/auth/login', formData);

// Search users (optional future)
export const searchUsers = (query) => API.get(`/profile/search?query=${query}`);

// Get all projects (used on Home.jsx)
export const fetchProjects = () => API.get('/project');

// Add new project (future)
export const createProject = (projectData) => API.post('/project', projectData);

// Optional: Add auth header for protected routes
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

