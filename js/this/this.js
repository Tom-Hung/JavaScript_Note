// 簡易原則
// - function：誰呼叫就指向誰
// - arrow funciton：指向定義時所在物件內的 this

var a = {
  value: 1,
  getVal: () => this.value,
};

var b = {
  value: 1,
  getVal: function () {
    return this.value;
  },
};

// 在 a 物件被定義，a 內部 this = Window Object
console.log(a.getVal()); // undefined

// 由 b 呼叫，this = b
console.log(b.getVal()); // 1

// ----------------------------------------------------------------

// 賦予變數
var a2 = a.getVal;
var b2 = b.getVal;

console.log(a2()); // undefined
console.log(b2()); // undefined
