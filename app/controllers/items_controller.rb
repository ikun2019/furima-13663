class ItemsController < ApplicationController
  before_action :authenticate_user!, except:[:index, :show]

  def index
    @items = Item.all.order("created_at DESC")
  end

  def new
    @item = Item.new
  end

  def create
    # binding.pry
    @item = Item.new(item_params)
    if @item.save
      redirect_to root_path
    else
      render action: :new
    end
  end

  def show
    @item = Item.find(params[:id])
  end
  
  
  private
  def item_params
    params.require(:item).permit(:name, :description, :category_id, :condition_id, :delivery_fee_id, :sending_area_id, :sending_day_id, :price, :image).merge(user_id: current_user.id)
  end
  
end
