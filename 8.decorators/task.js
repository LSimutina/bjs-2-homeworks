//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = md5(args); // получаем правильный хеш c помощью функции md5
		const objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
		if (objectInCache) { // если элемент найден
			return "Из кэша: " + objectInCache.result;
		}

		const result = func(...args); // в кеше результата нет — придётся считать
		cache.push(hash, result); // добавляем элемент с правильной структурой

		if (cache.length > 5) {
			cache.shift() // если слишком много элементов в кеше, надо удалить самый старый (первый) 
		}
		return "Вычисляем: " + result;
	}
	return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;

	function wrapper(...args) {
		wrapper.allCounts++;

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		if (!timeoutId) {
			wrapper.count++;
			func.apply(this, args);
		}

		timeoutId = setTimeout(() => {
			wrapper.count++;
			func(args);
		}, delay);
	}

	wrapper.allCounts = 0;
	wrapper.count = 0;

	return wrapper;
}