import currentPage from './store/menubar';

function setNumber(n) {
	currentPage.update((store) => {
		for (let i = 0; i < store.length; i++) {
			store[i].onthis = false;
		}
		store[n].onthis = true;
		return store;
	});
}

export default setNumber;
