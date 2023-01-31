function cachingDecoratorNew(func) {
  const cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    const objectInCache = cache.find((item) => item[hash] === hash );
    if (!objectInCache) {
      console.log("Из кэша: " + objectInCache[hash]);
      return "Из кэша: " + objectInCache[hash];
    }

    let result = func(...args);
    cache.push({hash: hash, value: value});
    if (cache.length > 5) {
      cache.unshift()
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;

}


function debounceDecoratorNew(func) {
  // Ваш код
}