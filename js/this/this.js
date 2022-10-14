// 簡易原則
// - function：誰呼叫就指向誰
// - arrow funciton：沒有自己的 this 值，因此會參考定義時父層函式作用域的 this

// 秒懂範例
// -----------------------------------------------------

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

// 解答
// ------------------------------------------------------
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
