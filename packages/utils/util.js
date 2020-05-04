export function throttle(fn, delay = 100) {
  let timer;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, delay)
    }
  }
}
