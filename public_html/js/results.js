/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//result();

// 全体を関数で囲んだ上で即時関数やonloadを呼ぶパターン
function result() {
  // 関数内での即時関数?
  (function(){
      alert("result1");    
  })();
  (function(){
      alert("result2");    
  })();
  
  // DOMロード時(複数有効)
  document.addEventListener('DOMContentLoaded', function () {
      alert("result4");
  });
  document.addEventListener('DOMContentLoaded', function () {
      alert("result5");
  });

  // window.onload 複数は無効(最後だけ実行)
  window.alert("result3");
  window.onload = function () {
    alert("ページが読み込まれました！1");
  };
  window.onload = function () {
    alert("ページが読み込まれました！2");
  };
  
  

  
};

  jQuery(function ($) {
    $('#title').text("Oh jQuery");
    alert("jQuery");
  });


