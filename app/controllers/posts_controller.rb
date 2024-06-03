class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    
    post = Post.create(content: params[:content])
    #新たに投稿されたメモの内容を変数postに格納
    redirect_to action: :index
     #redirect_toを用いることでindex.html.erbを返す

     render json:{ post: post }
     #renderメソッドを用いて、レスポンスで返却されるデータフォーマット
     #にJSONを指定
     #前列で定義した変数postの値をpostというキーとセットで
     #JavaScriptに送信している

    end
end

#レスポンスでindex.html.erbを返すように指定しているのは、
#posts_controller.rbのcreateアクション