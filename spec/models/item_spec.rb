require 'rails_helper'

RSpec.describe Item, type: :model do
  
  before do
    @item = FactoryBot.build(:item)
  end

  describe "#create" do
    context "登録できる場合" do
      it "全てのデータが揃っていれば登録できること" do
        expect(@item).to be_valid
      end
    end

    context "登録できない場合" do
      it "imageがないと登録できないこと" do
        @item.image = nil
        @item.valid?
        expect(@item.errors.full_messages).to include("Image can't be blank")
      end

      it "nameがないと登録できないこと" do
        @item.name = nil
        @item.valid?
        expect(@item.errors.full_messages).to include("Name can't be blank")
      end

      it "descriptionがないと登録できないこと" do
        @item.description = nil
        @item.valid?
        expect(@item.errors.full_messages).to include("Description can't be blank")
      end
      
      it "category_idが---だと登録できないこと" do
        @item.category_id = 1
        @item.valid?
        expect(@item.errors.full_messages).to include("Category must be other than 1")
      end

      it "condition_idが---だと登録できないこと" do
        @item.condition_id = 1
        @item.valid?
        expect(@item.errors.full_messages).to include("Condition must be other than 1")
      end

      it "delivery_fee_idが---だと登録できないこと" do
        @item.delivery_fee_id = 1
        @item.valid?
        expect(@item.errors.full_messages).to include("Delivery fee must be other than 1")
      end

      it "sending_area_idが---だと登録できないこと" do
        @item.sending_area_id = 1
        @item.valid?
        expect(@item.errors.full_messages).to include("Sending area must be other than 1")
      end
      
      it "sending_days_idが---だと登録できないこと" do
        @item.sending_days_id = 1
        @item.valid?
        expect(@item.errors.full_messages).to include("Sending days must be other than 1")
      end
      
      it "priceがないと登録できないこと" do
        @item.price = nil
        @item.valid?
        expect(@item.errors.full_messages).to include("Price can't be blank")
      end
      
      it "priceが299円以下だと登録できないこと" do
        @item.price = 299
        @item.valid?
        expect(@item.errors.full_messages).to include("Price must be greater than or equal to 300")
      end
      
      it "priceが10,000,000円以上だと登録できないこと" do
        @item.price = 10000000
        @item.valid?
        expect(@item.errors.full_messages).to include("Price must be less than or equal to 9999999")
      end
      it "priceが全角だと登録できないこと" do
        @item.price = "２０００"
        @item.valid?
        expect(@item.errors.full_messages).to include("Price is not a number")
      end
    end
  end
end
