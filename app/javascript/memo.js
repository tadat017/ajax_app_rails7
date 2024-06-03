function post(){
//リクエストを送信する処理

const form = document.getElementById("form");
//getElementByIdメソッドで取得した投稿ボタンの要素を変数formに格納



    //フォームの投稿が実行されることをトリガーにして、
    //非同期通信でメモが投稿されるように設定
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  //preventDefault()メソッドとは、既定のイベントを無効化するためのメソッド

  console.log("イベント発火");

  const formData = new FormData(form);
  //FormDataオブジェクトを使って、フォームの値を取得.生成したFormDataオブジェクトを変数formDataに格納

  const XHR = new XMLHttpRequest();
  //非同期通信を行うためにXMLHttpRequestオブジェクトを生成

  XHR.open("POST", "/posts", true);
  //openメソッドを用いて、リクエスト内容を指定

  XHR.responseType = "json";
  //レスポンスのデータフォーマット
  //（＝どのような形式のデータにするか）を指定するプロパティ

  XHR.send(formData);
 //send()メソッドとは、リクエストを送信するメソッド
 //フォームに入力された内容をサーバー側に送信

});
//


};

window.addEventListener('turbo:load',post);