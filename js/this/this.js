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

// ----------------------------------------------------------------

// 秒懂範例

var name = '全域阿婆';
  var auntie = {
    name: '漂亮阿姨',
    callName: function () {
      console.log('1', this.name);
      setTimeout(() => {
        console.log('2', this.name); 
        console.log('3', this); 
      }, 10);
    },
    callName2: () => {
      console.log('4', this.name);
      setTimeout(() => {
        console.log('5', this.name); 
        console.log('6', this); 
      }, 10);
    },
  };

  auntie.callName(); 
  auntie.callName2();

  const trans = auntie.callName;
  trans();

// 解答 :
// auntie.callName();  
// => '漂亮阿姨'
// => '漂亮阿姨'
// => auntie 物件

// auntie.callName2();
// => '全域阿婆'
// => '全域阿婆'
// => window or global 物件

// trans();
// => '全域阿婆'
// => '全域阿婆'
// => window or global 物件
