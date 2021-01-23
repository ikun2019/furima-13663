class OrdersController < ApplicationController
  before_action :set_item

  def index
    @ordered_address = OrderedAddress.new
  end

  def create
    @ordered_address = OrderedAddress.new(order_params)
    if @ordered_address.valid?
      pay_item
      @ordered_address.save
      redirect_to root_path
    else
      render action: :index
    end
    
  end

  private
  def order_params
    params.permit(:item_id, :order_id, :post_code, :prefecture_id, :city, :house_number, :building_name, :phone_number).merge(user_id: current_user.id, token: params[:token])
  end
  
  def set_item
    @item = Item.find(params[:item_id])
  end
  
  def pay_item
    Payjp.api_key = ENV["PAYJP_SECRET_KEY"]
    Payjp::Charge.create(
      amount: @item.price,
      card: params[:token],
      currency: 'jpy'
    )
  end
  
end
