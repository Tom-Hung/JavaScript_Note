// 瀏覽器中的某些事件，經由 root 物件向下傳遞略過 siblings 直到監聽 listener 目標 target ，再返回至 root 物件

// 由以下階段構成：
// Capture Phase  向下傳遞階段
// Target Phase   目標階段
// Bubbling Phase 向上傳遞階段

// 處理事件時，可以選擇直接註冊或監聽
//『 事件處理器 』：onEvent , ex: onClick , onChange
//『 事件監聽器 』：addEventListener(eventname, handler, capture)
// => 主要差異在監聽器可以設置要 bubbling 或 capture 階段執行

// 為什麼清楚這個流程很重要？實戰中會如何運用？
// 1. parent 與 child 有相同的事件時，清楚 handler 執行的順序
// 2. 理解 e.target 與 e.currentTarget 屬性指稱的對象，善加利用
// 3. 依據情境選擇要不要觸發 propagation，或要 capture or bubbling
// 4. Event Delegation 減少多餘的事件監聽器

document.querySelector(".nav_item").addEventListener("click", function (e) {
  console.log("nav_item");
  console.log(e.target); // 『 誰觸發事件 』
  console.log(e.currentTarget); // 『 監聽器在誰身上 』
});

document.querySelector(".nav_links").addEventListener("click", function (e) {
  console.log("nav_links");
  console.log(e.target);
  console.log(e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  console.log("nav");
  console.log(e.target);
  console.log(e.currentTarget);
});

// ------------------------------------------------------------------------------------------
// 常用技巧範例
// 假設：每個 nav_item 被點擊時要 print 出誰被點擊
// ------------------------------------------------------------------------------------------
// [ 傳統做法：遍歷每個元素綁定事件監聽器，萬一要遍歷的項目眾多影響效能 ]

// const nav_items = document.querySelectorAll(".nav_item");

// nav_items.forEach(function (el) {
//   el.addEventListener("click", function () {
//     console.log(this);
//   });
// });

// ------------------------------------------------------------------------------------------

// [ 善用 bubbling up 與 e.target 可以用一個事件監聽器取代多個，稱作 Event Delegation ]

// document.querySelector(".nav").addEventListener("click", function (e) {
//   // Matching stratergy 確保在眾多 children 中，只有我要得才會觸發事件
//   if (e.target.classList.contains("nav_item")) {
//     console.log("this is nav_item for sure");
//   }
// });
