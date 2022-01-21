// 陣列常用的基本方法
// ----------------------------------------------------------------

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];

// 1. map     回傳新陣列

// ---------------------------

// 2. forEach 回傳 undefined 原陣列迭代執行 callback

// ---------------------------

// 3. filter  回傳新陣列，經過檢核條件
const newarr = arr1.filter((obj) => obj > 3);
console.log(newarr);

// ---------------------------

// 4. includes 回傳布 boolean
const isExist = arr1.includes(1);
console.log(isExist);

// ---------------------------

// 5. find 回傳第一個符合條件的值，否則 undefined
const first = arr1.find((obj) => obj > 1);
console.log(first);

// ---------------------------

// 6. indexOf 回傳該元素在陣列中的哪個位置
const where = arr1.indexOf(4);
console.log(where);

// ---------------------------

// 7. concat 回傳新陣列，合併
const concatArr = arr1.concat(arr2);
console.log(concatArr);

// ---------------------------

// 8. slice 回傳新陣列，取自原陣列設定 begin - end(不包含) 的 shallow copy
const slArr = arr1.slice(2, 4);
console.log(slArr);

// ---------------------------

// 9. splice 回傳被刪除的陣列，原陣列刪除 / 新增元素
arr1.splice(1, 2, "add here");
console.log(arr1);

// ---------------------------

// 10. join 回傳字串，設置連接處

const strArr = arr1.join();
console.log(strArr);

// ---------------------------

// By value vs. By reference
// ----------------------------------------------------------------
// 原始型別: 傳值 value
var a = 10;
var b = a; // 指向記憶體中不同位置

b = 100;

console.log("------- by value example -------");
console.log("a: " + a); // 10
console.log("b: " + b); // 100

// 物件: 傳址 reference
var c = { name: "Tom" };
var d = c; // 指向記憶體中同一位置

c.name = "Rosey";

console.log("------- by reference example -------");
console.log("c: " + c.name); // Rosey
console.log("d: " + d.name); // Rosey

// 因為 by reference 的機制所以在複製物件時，為了避免修改複製的新物件會影響到原本的值
// 因此採用適當的複製方式很重要

// Shallow copy vs. Deep copy
// ----------------------------------------------------------------
// Shallow copy: 只完整複製第一層，第二層開始 by reference 修改後會影響到元物件

const e = [100, { name: "Tom" }];
const copy_e = [...e]; // 展開語法屬於 shallow copy

copy_e[0] = 3000; // 第一層 by value
copy_e[1].name = "Rosey"; // 第二層 by reference

console.log("------- shallow copy example -------");
console.log(e);
console.log(copy_e);

// Deep copy: 完整複製原物件，即使更改了再多層內容也完全不影響原物件

// by 套件 jQuery / lodash / ramda ...
// or JSON parse + stringfy
const f = [200, { name: "Tom" }];
const copy_f = JSON.parse(JSON.stringify(f));

copy_f[0] = 6000;
copy_f[1].name = "Rosey";

console.log("------- deep copy example -------");
console.log(f);
console.log(copy_f);

// 進階陣列物件的操作
