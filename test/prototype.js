// constructor 建構式
function Person(name) {
  this.name = name;
  this.ages = 20;

  // method 加這每次繼承都要佔記憶體空間
  // this.greet = function () {
  //   console.log(this.name + " say hi");
  // };
}

// 善用原型鏈 節省記憶體空間
Person.prototype.greet = function () {
  console.log(this.name + " say hi");
};

// 可以加複數個 method
Person.prototype.run = function () {
  console.log(this.name + " runs");
};

// 不只可以加 method
Person.prototype.school = "tku";

//  *** 重要 ***

//     每個"物件"都有原型 (__proto__) 用來繼承父層物件的屬性與方法
//     每個"函式"都有原型 (prototype) 作用是編寫要被繼承的屬性與方法 (函式作為建構函式時 prototype 才有意義;)

//     關係： 我可以設計函式建構式 （constructor) 的（prototype)，透過該建構式建立的物件則可以會有一個（＿proto__）
//           屬性繼承自 prototype 的屬性與方法

//     建構式（constructor) 與 prototype 都可以定義屬性與方法，他們的關係是什麼？
//     建構式 用作建立 object instance，例如：建立了 10 個 Person 物件，會有 10 個物件包含 name 與 age 都是新建出來的獨立個體
//     prototype 基於原型鏈讓 object instance 可以取得建構式所定義的共用屬性與方法 ，例如：建立了 10 個 Person 物件，10 個 Person.school 都會指向 tku

//  *********

// object instance : Tom
const Tom = new Person("Tom");

// console.log(Tom.__proto__);
// console.log(Tom.school);
// console.log(Tom);
// Tom.greet();

// class constructor
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.age = 20;
  }

  // method
  act(action) {
    console.log(`${this.type} ${this.name} ${action}`);
  }
}

// object instance
const cat = new Animal("Lucy", "Cat");

// cat.act("meow");
// console.log(cat.__proto__);
