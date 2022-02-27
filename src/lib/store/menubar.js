import { writable } from 'svelte/store';

let currentPage = writable([
	{ page: 'Home', link: './', onthis: true },
	{ page: 'About me', link: './about', onthis: false }
]);

export default currentPage;
