// 展開 / 其餘語法
const objA = {
  name: "Tom",
  age: "23",
  hegiht: "100",
  weight: "100",
};

const objB = {
  ...objA, // 複製 objA 並展開
  relationship: "sister", // 添加新值
};

const objC = {
  ...objA, // 複製 objA 其餘值
  name: "Rosey", // 會覆蓋 objA 既有值
};

const objD = {
  name: "Rosey",
  ...objA, // 所有相同屬性，下方的會覆蓋上方得值
};

// 展開與其餘其實是一樣的

console.log(`B: ${objB}`);
console.log(`C: ${objC}`);
console.log(`D: ${objD}`);

// 解構賦值

//
