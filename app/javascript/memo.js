const buildHTML = (XHR) => {
const item = XHR.response.post;
      const html = `
        <div class="post">
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;

        //新たに投稿されたメモのHTMLを生成する処理
        //XHR.response.postはレスポンスの中から投稿されたメモの
        //情報を抽出し変数itemに格納
        //XHR.response.postは
        //postsコントローラーのcreateアクションに
        //render json: {post: post}と記述されていることで、
        //postというキーと投稿されたメモの内容が紐付いている
        //参照先app/controllers/posts_controller.rb
        //render json:{ post: post }
      
        //item内に格納されたメモの情報を元にして、
        //ブラウザに描画するためのHTMLを生成し、変数htmlに格納
        
        return html;
        //関数buildHTMLの返り値にhtmlを指定
        //このhtmlとは、3〜11行目で定義した変数htmlのこと
        //つまり投稿後に新たに生成されたHTMLのこと
      };

function post(){
//リクエストを送信する処理

const form = document.getElementById("form");
//getElementByIdメソッドで取得した投稿ボタンの要素を変数formに格納



    
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      //フォームの投稿が実行されることをトリガーにして、
    //非同期通信でメモが投稿されるように設定
  //preventDefault()メソッドとは、既定のイベントを無効化するためのメソッド

  

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

 XHR.onload = () => {
  //onloadプロパティを用いて、レスポンスの受信に成功したときの処理の記述
 //onloadプロパティとは、リクエストの送信が
 //成功したときに呼び出されるプロパティ

 if (XHR.status != 200) {
  alert(`Error ${XHR.status}: ${XHR.statusText}`);
  //レスポンスに何らかの問題があった場合の処理を記述
//HTTPステータスコードが格納
//XHR.statusTextには、ステータスコードに応じたメッセージが格納
  return null;
};
//return null;を定義
//return null;によってJavaScriptの処理から抜け出すことができる


 const list = document.getElementById("list");
 //生成したHTMLを描画する処理
 //新しいメモを挿入するための要素を取得して、変数listに格納
 //エラーが出た場合に以降に記述されている処理を行わないようにすることが目的

 const formText = document.getElementById("content");
      
  //リセットの対象となるフォームの要素contentを取得して、変数formTextに格納
//formTextのvalue属性に空の文字列を割り当てることで、フォームの値をリセットしている


 

        list.insertAdjacentHTML("afterend", buildHTML(XHR));
        //生成したHTMLを描画する処理
        //insertAdjacentHTMLメソッドとは、
        //HTMLをある要素の指定した箇所に挿入するメソッド
        //HTMLを挿入したい要素に対して使うメソッドで、
        //第一引数にHTMLを挿入したい位置、第二引数に挿入したいHTMLを記述
        //第一引数に指定できるのは以下の4つ
        //beforebegin	要素の直前
        //afterbegin	要素内部の、最初の子要素の直前
        //beforeend	要素内部の、最後の子要素の直後
        //afterend	要素の直後
        //記述方法<挿入したい要素名>.insertAdjacentHTML(挿入したい位置,挿入したいHTML);

        formText.value = "";
        //formTextのvalue属性に空の文字列を
        //指定することで、フォームの中身をリセットしている

};
 


});
//


};

window.addEventListener('turbo:load',post);