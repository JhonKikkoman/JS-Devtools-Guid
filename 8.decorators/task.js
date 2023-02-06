function cachingDecoratorNew(func) {
  const cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    const objectInCache = cache.find((item) => item.hash === hash);
    if (!objectInCache) {
      console.log("Из кэша: " + result);
      return "Из кэша: " + result;
    }

    let result = func(...args);
    cache.push({hash: hash, result: result});
    if (cache.length > 5) {
      cache.unshift()
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;

}


function debounceDecoratorNew(func) {
  return function wrapper(count, allCount) {
    
  }
}