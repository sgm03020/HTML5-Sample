/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// onloadとready、即時関数
//https://rcmdnk.com/blog/2015/07/11/computer-javascript-jquery/


// 即時関数 - 関数を定義すると同時に実行する
// 即時関数の書き方
// https://qiita.com/katsukii/items/cfe9fd968ba0db603b1e
//https://qiita.com/39_isao/items/2fa8faed283d455f4181
// なぜ使うのか
// 即時関数：再利用されない一連の処理を新たなスコープで包み込む
// 1. ページの初期化
// 2. 機能判定
// 3. プライベートプロパティ／メソッドの定義
;(function(){
  alert("alert1");  
})();

// jQueryの$(document).readyに相当する
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded');
  alert("alert2");
});

// window.onloadは1つだけしか指定できない
window.onload = function() {
  alert("alert3");  

  const parent = document.createElement('ul');
  parent.innerHTML = `
  <li>first</li>
  <li>second</li>
  <li>third</li>
`;

  window.setInterval(function() {
    var dd = new Date();
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  }, 1000);
}