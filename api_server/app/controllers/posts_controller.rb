class PostsController < ApplicationController

  def new
    # @room = Rooms.find_by(room_id: params[:room_id])
    puts "Room found"
    # render json: @room
  end

  def create
    puts "------------------------"
    puts "------------------------"
    puts "------------------------"
    puts "------------------------"
    puts "------------------------"
    puts "------------category------------#{post_params[:category]}"
    puts "------------title------------#{post_params[:title]}"
    puts "------------content------------#{post_params[:content]}"

    @post = Post.new(post_params)
    # @post = room.posts.new
    @post.user = current_user

    room = Room.find params[:room_id]
    if @post.save
      render json: @post
    else
      render json: { errors: ["Post could not be saved."] }, status: 500
    end

    if @post.save
      ActionCable.server.broadcast 'posts',
        title: @post.title,
        description: @post.description,
        user: @post.user.first_name,
        content: @post.content
        # category: @post.category
      head :ok
    end

  end

  def show
    @post = Post.find_by(id: params[:id])
    if @post.present?
      render json: @post, serializer: PostSerializer, status: 200
    else
      render json: { errors: ["Post not found."] }, status: 422
    end
  end

  private
    def post_params
      params
      .require(:post)
      .permit(
        :room_id,
        :user_id,
        :content,
        :title,
        :category,
        :link,
        :description
      )
    end

end