import { posts } from '.';

export function getPosts(params) {
	return posts.get('/', { params });
}

export function getPostById(id) {
	return posts.get('/' + id);
}

export function createPost(data) {
	console.log('createPost : ', data);
	return posts.post('/', data);
}

export function updatePost(id, data) {
	console.log('updatePost : ', data);
	return posts.put('/' + id, data);
}

export function deletePost(id) {
	return posts.delete('/' + id);
}

// development : 'http://localhost:5173/posts/'
// production : 'http://localhost:5174/posts/'
