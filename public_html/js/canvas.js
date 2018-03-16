/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
  var ctx;
  document.body.onload = init;
  function init() {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#FF0000";
    ctx.fillstyle = "#00FF00";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 20;

    // 線を引く
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(300, 150);
    ctx.stroke();

    // 短形を描く
    ctx.fillRect(100, 200, 200, 100);
    ctx.strokeRect(100, 200, 200, 100);
  }
})();
    