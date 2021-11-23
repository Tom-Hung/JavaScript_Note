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

var a2 = a.getVal;
var b2 = b.getVal;

console.log(a2()); // undefined 定義時
console.log(b2()); // undefined 呼叫時

var c = {
  value: 1,
  getVal: function () {
    this.getVal2 = () => this.value;
  },
  getVal2: () => this.value,
};

var d = {
  value: 1,
  getVal: function () {
    const g = () => this.value;
    g();
  },
};

console.log(`Test a: ${a.getVal()}`); // undefined

console.log(`Test b: ${b.getVal()}`); // 1

console.log(`Test c: ${c.getVal2()}`); // undefined
c.getVal();
console.log(`Test c: ${c.getVal2()}`); // 1

console.log(`Test d: ${d.getVal()}`); // undefined 因為定義時是在 getVal function 內，此時物件事undefined

const data = { id: 100 };

function fn() {
  console.log(`fn result: ${this.id}`); // 100

  setTimeout(function () {
    console.log(`fn timeout result: ${this.id}`); // undefined 執行環境結束後在全域呼叫
  }, 100);
}

const fn_arrow = () => {
  console.log(`fn_arrow result: ${this.id}`); // undefined 定義時父層（全域) 的 this

  setTimeout(() => {
    console.log(`fn_arrow timeout result: ${this.id}`); // undefined 定義時父層（全域) 的 this
  });
};

fn.call(data);
fn_arrow.call(data);
