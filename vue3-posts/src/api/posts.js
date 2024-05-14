// axios
const posts = [
	{ id: 1, title: '제목1', content: '내용1', date: '2024-04-05' },
	{ id: 2, title: '제목2', content: '내용2', date: '2024-04-05' },
	{ id: 3, title: '제목3', content: '내용3', date: '2024-04-05' },
	{ id: 4, title: '제목4', content: '내용4', date: '2024-04-05' },
	{ id: 5, title: '제목5', content: '내용5', date: '2024-04-05' },
];

export function getPosts() {
	return posts;
}

export function getPostById(id) {
	return posts.find(item => item.id === id);
}
