{
	const onlyWord = document.querySelectorAll('.only_word');

	// возвращает только слово
	function declOfNum(n, titles) {
		return titles[n % 10 === 1 && n % 100 !== 11 ?
			0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
	}

	onlyWord[0].textContent = declOfNum(21, ['год', 'года', 'лет']);
	onlyWord[1].textContent = declOfNum(33, ['год', 'года', 'лет']);
	onlyWord[2].textContent = declOfNum(49, ['год', 'года', 'лет']);
}

{
	const numAndWord = document.querySelectorAll('.num_and_word');

	// возвращает число и слово
	function declOfNum(n, titles) {
		return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
			0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
	}

	numAndWord[0].textContent = declOfNum(49, ['год', 'года', 'лет']);
	numAndWord[1].textContent = declOfNum(53, ['год', 'года', 'лет']);
	numAndWord[2].textContent = declOfNum(71, ['год', 'года', 'лет']);
}

{
	const numAndWordFrom = document.querySelectorAll('.num_and_word-from');

	// возвращает число и слово в родительном падеже
	function declOfNum(n, titles, from) {
		return n + ' ' + titles[from ? n % 10 === 1 && n % 100 !== 11 ? 1 : 2 : n % 10 === 1 && n % 100 !== 11 ?
			0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
	}

	numAndWordFrom[0].textContent = 'От ' + declOfNum(49, ['год', 'года', 'лет'], true);
	numAndWordFrom[1].textContent = 'От ' + declOfNum(53, ['год', 'года', 'лет'], true);
	numAndWordFrom[2].textContent = 'От ' + declOfNum(71, ['год', 'года', 'лет'], true);
}