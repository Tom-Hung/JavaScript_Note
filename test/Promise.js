// 建構函式
function Person(name) {
  this.name = name;
  this.age = 100;
  this.test = function () {
    console.log(123);
  };
}

// 原型方法
Person.prototype.speak = function () {
  console.log(this.name);
};

// const Tom = new Person("Tom");
// console.log(Tom);

// Promise 物件
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("100");
  }, 3000);
});

// console.log(promise1);

promise1.then((res) => console.log(res));

// 函式與 Promise 應用
promise_1 = (num) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(num), 2000));

promise_2 = (text) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(text), 3000));

// Promise all 等待全部完成
Promise.all([promise_1(123), promise_2("text")]).then((res) =>
  console.log(res)
);

// Promise race 等最快的完成
Promise.race([promise_1(123), promise_2("text")]).then((res) =>
  console.log(res)
);

// Promise resolve
const result = Promise.resolve("res");

result.then((res) => {
  console.log(res);
});

// Promise reject
const result2 = Promise.reject("res");

result2.catch((res) => {
  console.log(res);
});

// fetch 與 axios 呼叫 API是基於 Promise
// Promise 處理非同步
