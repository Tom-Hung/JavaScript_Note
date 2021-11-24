// 網頁中事件，例如：scrolling , autocomplete，很容易因為觸發太過頻繁，
// 而影響效能，透過 debounce & throttle 可以有效的控管這些事件的觸發頻率

// debounce : 只在高頻率事件結束時觸發執行
// 原理： 不斷刷新 timeout 卡住不執行，直到事件結束

// throttle : 高頻率事件中每隔 n 秒執行一次
// 原理： 紀錄上一次觸發事件與下一次的間隔，若超過定義間隔再執行

// random function handleScroll
const handleScroll = () => {
  console.log(window.scrollY);
};

// debounce example
const debounce = (func) => {
  let timer = null;

  return () => {
    // 不段刷新的重點在 clearTimeout
    clearTimeout(timer);
    timer = setTimeout(func, 1000);
  };
};

// onScroll listener
// window.addEventListener("scroll", debounce(handleScroll));

// throttle example
const throttle = (func) => {
  let timer;
  let last;

  return () => {
    // 1970 至此刻的毫秒
    const now = +new Date();

    // 當 last 存在 且 間隔內 執行
    if (last && now < last + 2000) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        func();
      }, 2000);
    } else {
      // 符合間隔時間便執行並更新 last
      last = now;
      func();
    }
  };
};

// onScroll listener
// window.addEventListener("scroll", throttle(handleScroll));
