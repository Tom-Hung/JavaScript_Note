// ＊ 當執行環境中找不到變數時，會向外部環境尋求

const cat = "MIMI";

function printCat() {
  // 這個執行環境找不到變數 (cat)， 向外部環境（全域）找到
  console.log(cat);
}

printCat(); // 印出 MIMI

// 閉包 Closure: 在上述的基礎下，即便外部環境已經執行完被踢掉，它所建立的變數還是可以被存取得到，範例如下：

function setLastName(last_name) {
  // 回傳後 setLastName 就被執行堆疊踢掉，但是變數 last_name 會保留在記憶體某處
  return function setFirstName(first_name) {
    // setFirstName 內沒有 last_name，因此向外部環境請求
    // 即便外部環境已經被執行堆疊踢掉，但是他的變數我還是能從記憶體中存取得到
    console.log(first_name + last_name);
  };
}

setLastName("Tom")("Hung");
