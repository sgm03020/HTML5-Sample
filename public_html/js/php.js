/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var req = new XMLHttpRequest();

req.onreadystatechange = function () {
  var result = document.getElementById('result');
      //result.innerHTML = req.responseText;
    if (req.status === 200) { // 通信の成功時
      result.innerHTML = req.responseText;
    }
      /*
  if (req.readyState === 4) { // 通信の完了時
    if (req.status === 200) { // 通信の成功時
      result.innerHTML = req.responseText;
    }
  } else {
    result.innerHTML = "通信中...";
  }
  */
};


document.addEventListener('DOMContentLoaded', function () {
  //alert("result5");
});

function asyncSend() {
  /*
  req.open('POST', 'http://localhost:8000/helloAjax.php', true);
  req.setRequestHeader('content-type',
          'application/x-www-form-urlencoded;charset=UTF-8');
  req.send('name=' + encodeURIComponent(document.fm.name.value));
  */
  req.open('GET', 'http://localhost:8000/helloAjax.php?name=' + encodeURIComponent(document.fm.name.value), true);
  req.send(null);
  
}



