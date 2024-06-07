class ApplicationController < ActionController::Base
  before_action :basic_auth


  private

  def basic_auth
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV["BASIC_AUTH_USER"] && password == ENV["BASIC_AUTH_PASSWORD"]  # 環境変数を読み込む記述 
      #ログイン情報
    end
  end
end
#AjaxAppへユーザー認証機能を実装
#ユーザー名とパスワードを知っているユーザーのみ、AjaxAppへアクセスできる
#閲覧できるユーザーを制限するためにBasic認証を導入
#Basic認証によるログインの要求は、すべてのコントローラーで行いたい
#Basic認証の処理をapplication_controller.rbのprivate以下に
#メソッドとして定義し、before_actionで呼び出す
#これで、どのページにアクセスしてもBasic認証が要求されるようになる

#コード内でログイン情報ほ管理するのは危ない
#zshというログインシェルに環境変数を記載する場所を設定記載する場所は.zshrc
#設定ファイルはvimというコマンド（ターミナル）を用いて編集
#使用例vim ~/.zshrc
#通常モードとインサートモードがある

#1 vim ~/.profileシェルの設定ファイルの開き方
#i を押下するとインサートモードへ
#移行ターミナルの左下に -- INSERT -- と表示されていれば移行できている
#環境変数を定義 例 export BASIC_AUTH_USER="admin"
                 #export BASIC_AUTH_PASSWORD="2222"
#Esc を押下してインサートモードを離脱した後、 :wq と入力して Enterで保存
#読み込みのコマンドを実行する必要source ~/.profile