import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options), options);
	return instance;
}

// export const posts = create(import.meta.env.VITE_APP_API_URL + 'posts/');
export const posts = create('http://localhost:5173/posts/');
