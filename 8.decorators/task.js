function cachingDecoratorNew(func) {
  const cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    const objectInCache = cache.find((item) => item.hash === hash);
    if (!objectInCache) {
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
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


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  function wrapper(...args) {
    wrapper.allCount += 1;
    if(timeoutId){
      clearInterval(timeoutId);
    }
    if (timeoutId === null) {
       wrapper.count += 1;
       func(...args);
    }
    timeoutId = setTimeout(() => {
       wrapper.count += 1;
       func(...args);
    }, delay);
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}

