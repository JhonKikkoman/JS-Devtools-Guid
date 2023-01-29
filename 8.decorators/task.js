function cachingDecoratorNew(func) {
  cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    const objectInCache = cache.find((item) => hash[item] === cache[hash] );
    if (!objectInCache) {
      console.log("Из кэша: " + cache[hash]);
      return "Из кэша: " + cache[hash];
    }

    let result = func(...args);
    cache.push({hash});
    if (cache.length > 5) {
      cache.unshift(hash)
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;

}


function debounceDecoratorNew(func) {
  // Ваш код
}