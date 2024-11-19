//Задача № 1
function cachingDecoratorNew(func) {
    // Инициализация кеша
    const cache = [];

    return function(...args) {
        // Генерация хеша на основе аргументов
        const hash = md5(args.join(',')); // Преобразуем аргументы в строку и генерируем хеш

        // Поиск элемента в кеше
        const objectInCache = cache.find((item) => item.hash === hash);

        // Если объект найден в кеше, возвращаем его значение
        if (objectInCache) {
            console.log("Из кеша: " + objectInCache.value);
            return "Из кеша: " + objectInCache.value;
        }

        // Если объекта нет в кеше, вызываем исходную функцию
        const result = func(...args);

        // Добавляем результат и хеш в кеш
        cache.push({ hash: hash, value: result });

        // Если кеш превышает 5 элементов, удаляем первый элемент
        if (cache.length > 5) {
            cache.shift();
        }

        // Выводим и возвращаем результат
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    };
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let isFirstCall = true;

    function wrapper(...args) {
        wrapper.allCount++;

        if (isFirstCall) {
            func.apply(this, args);
            wrapper.count++;
            isFirstCall = false;
            return;
        }

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
            wrapper.count++;
        }, delay);
    }

    wrapper.count = 0; // количество вызовов оригинальной функции
    wrapper.allCount = 0; // количество вызовов декорированной функции
    
    return wrapper;
}
  
