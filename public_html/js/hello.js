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


// jQueryを使わない書き方
document.addEventListener('DOMContentLoaded', function() {
//$(document).ready(function () {

  alert("result?");

  //何かしらの処理
  const parent = document.createElement('ul');

  parent.innerHTML = `
  <li>first</li>
  <li>second</li>
  <li>third</li>
`;

  //var li = document.createElement("li");
  //li.appendChild(document.createTextNode("First"));

  //parent.appendChild(li);
  //parent.appendChild('<li>first</li>');


  var objBody = document.getElementsByTagName("body").item(0);
  objBody.appendChild(parent);

  //parent.innerHTML = '<li>third</li>' + parent.innerHTML;

  //var contentBlock = document.getElementById('contentBlock');

  var clickButton = document.getElementById('clickButton');
  clickButton.addEventListener('click', function () {
    alert('Alert!');
  });

  var changeButton = document.getElementById('changeButton');  
  changeButton.addEventListener('click', function () {
     
    //var contentBlock = document.getElementById('contentBlock');
    // innerHTMLを使うとclickButton.addEventListenerが削除される
    //contentBlock.innerHTML = '<b>Test:</b>' + contentBlock.innerHTML;
    // つまりdivの中にあるボタンのイベントがdivのinnerHTML指定でリセットされる

    // 配列へのアクセスはelement_ul[0]かまたは.item(0)
    //var element_ul = document.getElementsByTagName("ul").item(0);    
    var $ul = document.getElementsByTagName("ul").item(0);
    //var element_li = document.createElement("li");
    //element_li.innerHTML('force');

    //const text = document.createTextNode('four');
    ///element_li.appendChild(document.createTextNode("four"));

    //element_ul.length;
    //console.log(element_ul.length);

    ///element_ul.appendChild(element_li);

    // HTML5ではappendはダメ(jQueryではappendでよい)
    // さらにIEでは未サポート
    //element_ul.append("<li>Five</li>");

    var songs = ['one',
      'two',
      'three',
      'four',
      'five'];

    // DocumentFragmentを使い作画回数を減らす
    var fragment = document.createDocumentFragment();
    for (var cnt = 0, len = songs.length; cnt < len; cnt++)
    {
      var $li = document.createElement('li');
      var song = document.createTextNode(songs[cnt]);
      $li.appendChild(song);
      fragment.appendChild($li); // fragmentの追加する
    }

    //element_li.appendChild(text);
    //fragment.appendChild(element_li);

    // 最後に追加
    //element_ul.appendChild(fragment);
    $ul.appendChild(fragment);
    
    // innerHTMLの代わりにinsertAdjacentHTMLを使うとイベントはそのまま残る
    var contentBlock = document.getElementById('contentBlock');
    //contentBlock.innerHTML = '<b>Test:</b>' + contentBlock.innerHTML;
    contentBlock.insertAdjacentHTML('afterbegin', '<b>Test:</b>');
    
  });

  // innerHTMLの代わりにinsertAdjacentHTMLを使うとイベントはそのまま残る
  //var contentBlock = document.getElementById('contentBlock');
  //contentBlock.innerHTML = '<b>Test:</b>' + contentBlock.innerHTML;
  //contentBlock.insertAdjacentHTML('afterbegin', '<b>Test:</b>');

});


function addElement() {
  var element = document.createElement('div');
  element.id = "id";
  element.innerHTML = "hogehoge";
  element.style.backgroundColor = 'red';

  var objBody = document.getElementsByTagName("body").item(0);
  objBody.appendChild(element);
  // body要素にdivエレメントを追加 
}



jQuery(function ($) {
  console.log($('#title').text());

  $('#title').text("My Title");

  // jQueryでは以下のように書ける
  //$("ul").append("<li>追加</li>");    

});
